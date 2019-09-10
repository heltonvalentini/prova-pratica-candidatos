import {Component,Input} from "@angular/core";
import {CONSTANTS} from "./../routes.constants.ts";
import {CommonsComponent} from "./../../commons/commons.component";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html'
})

export class MenuComponent{
  constructor(private commons: CommonsComponent){}

  @Input() menus: Array<any>;

  ngOnInit(){
  
  }
  
  public allowedMenu(menu: any): boolean{
      return menu.enable != false 
      		 && this.commons.allowedDomain(menu)
      		 && this.commons.allowedGroups(menu);
  }

}
