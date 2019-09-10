declare var VMasker : VMaskerStatic;
export class MasksComponent{
  private maskPhone(){
    var elems = (document.getElementsByClassName('mask-phone'));
    for(var e in elems){
      try{
        var elem = new VMasker(elems[e]);
        elem.maskPattern(elems[e].getAttribute("mask-pattern"));
      }catch(ex){}
    }
  }
  private maskPattern(){
    var elems = (document.getElementsByClassName('mask-pattern'));
    for(var e in elems){
      try{
        var elem = new VMasker(elems[e]);
        elem.maskPattern(elems[e].getAttribute("mask-pattern"));
      }catch(ex){}
    }
  }
  private maskNumber(){
    var elems = (document.getElementsByClassName('mask-number'));
    for(var e in elems){
      try{
        var elem = new VMasker(elems[e]);
        elem.maskNumber();
      }catch(ex){}
    }
  }
  private maskMoney(){
    var elems = (document.getElementsByClassName('mask-money'));
    for(var e in elems){
      try{
        var elem = new VMasker(elems[e]);
        elem.maskMoney();
      }catch(ex){}
    }
  }
  public maskFields(){
    this.maskPhone();
    this.maskNumber();
    this.maskPattern();
    this.maskMoney();
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
  public toPattern(value: string, pattern: string){
    return VMasker.toPattern(value, pattern);
  }
  public unMaskMoney(value: string): Number{
    return Number(value.replace(/[^0-9,]/g,"").replace(",","."));
  }
  public toMoney(value: number, precision?: number){
    //console.log(VMasker.toMoney(value, {precision: 2}));
    var allowNegative = false;
    var precision = precision ? precision : 2;
    var thousands = ".";
    var decimal = ",";
    var prefix = "";
    var suffix = "";
   	value = (value/Math.pow(10, precision));
    if (!allowNegative) value = Math.abs(value);

    let text = (+value || 0).toFixed(precision);

    let [integer, dec] = text.split('.');

    let integerPart = integer.replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
    let decimalPart = precision <= 0 ? '' : `${decimal}${dec}`;

    return `${prefix}${integerPart}${decimalPart}${suffix}`;
  }
}
