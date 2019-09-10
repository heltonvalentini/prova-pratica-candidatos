import {Pipe} from '@angular/core';
import {MasksComponent} from './../commons/masks.component';

@Pipe({
	name: 'currencybrl'
})
export class CurrencyBRLPipe{ 

  constructor(private masks: MasksComponent){}

	public transform(value: number): string{
    var stringValue: string = value.toFixed(2);
    stringValue = stringValue.replace(/[^0-9]/g,"");
    return this.masks.toMoney(Number(stringValue));
	}

}
