import { PipeTransform, Injectable, Pipe }     from '@angular/core';
import  { CommonsComponent } from '../commons/commons.component';
@Pipe({
  name: 'dateFilter'
})
@Injectable()
export class DateFilterPipe implements PipeTransform {
  constructor(private  commons: CommonsComponent){}
  transform(items: any[], args: any[]): any {
    if(items == null) return [];
    return items.filter(item => this.verfiyDate(item, args));
  }
  verfiyDate(item, daysBefore){
    var usedDates = this.commons.getDates(daysBefore);
    item.date = this.commons.removeDateZone(new Date(item.date));
    if(item.date >= usedDates.startDate) return true;
    return false;
  }

}
