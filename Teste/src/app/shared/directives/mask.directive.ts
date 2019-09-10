import {Directive, Input} from "@angular/core";
import {FormControl} from "@angular/forms";

@Directive({
  selector: '[mask]',
  host: {
    '(input)': '_onInput($event)',
  }
})
export class MaskDirective {

  masks: any = {
    cnpj: { 
      mask: this.maskCnpj
    },
    money: {
      mask: this.maskMoney
    },
    phone: {
      mask: this.maskPhone,
      patterns: {
        8: "(99) 9999-9999",
        9: "(99) 9 9999-9999"
      }
    },
    integer: {
      mask: this.maskInteger    
    }
  };

  @Input('mask') mask;
  @Input('maskoptions') options;
  @Input('formcontrol') formcontrol: FormControl;
  @Input('formControl') formControl: FormControl;
  _onInput(e) {
    if(!this.options) this.options = {};
    this.options['patterns'] = this.masks[this.mask]['patterns'];
    e.target.value = this.masks[this.mask]['mask'](e.target.value, this.options);
    if(this.formcontrol) this.formcontrol.setValue(e.target.value);
    else if(this.formControl) this.formControl.setValue(e.target.value);
  }

  private maskCnpj(value:  string, options: any){
    return VMasker.toPattern(value, "99.999.999/9999-99");
  }
  private maskPhone(value:  string, options: any){
    var mask = options['patterns'][8];
    if((value.replace(/[^0-9]/g, "")).length >= 11){
      var mask = options['patterns'][9];
    }
    return VMasker.toPattern(value, mask);
  }
  private maskMoney(value: number, options: any){
    return VMasker.toMoney(value, options);
  }
  private maskInteger(value: string, options: any){
    return value.replace(/[^0-9]/g, '');
  }
  public unMaskPhone(phone){
    phone = this.unMaskNumber(phone);
    return phone.substring(0,11);
  }
  public unMaskNumber(num){
    return num.replace(/[^0-9.]/g, "");
  }
  public unMaskInteger(num){
    return num.replace(/[^0-9]/g, "");
  }
}
