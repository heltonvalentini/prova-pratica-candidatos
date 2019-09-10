import {Pipe} from '@angular/core';
import {MasksComponent} from './../commons/masks.component';

@Pipe({
	name: 'topattern'
})
export class ToPatternPipe{ 

  constructor(private masks: MasksComponent){}

	public transform(value: string, pattern: string): string{
    return this.masks.toPattern(value, pattern);
	}

}
