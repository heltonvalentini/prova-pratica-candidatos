import { FormControl } from "@angular/forms";

export class AgilliValidators{
  static min = (min:number) => {
    return (control: FormControl) => {
        return (AgilliValidators.toNum(control.value) < min) ? 
          {min: {valid: false}} : null;
      };
  };
  static toNum(value: string): number{
    var num = Number(String(value).replace(/[^0-9,]/g,"").replace(/,/,"."));
    return num;
  }
}
