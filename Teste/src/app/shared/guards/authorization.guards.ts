import { Injectable } from '@angular/core';
import { MENUS } from '../../panel/menus.component';
import { CommonsComponent } from './../commons/commons.component';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {NotificationsService} from "angular2-notifications";

@Injectable()
export class AuthorizationGuard implements CanActivate {

  constructor(private router: Router,
             private commons: CommonsComponent,
             private notifications: NotificationsService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    for(var property in MENUS){
      if(MENUS.hasOwnProperty(property)){
      for(var i in MENUS[property]){
        if(MENUS[property][i].fullRoute == state.url){
          if(this.allowedRoute(MENUS[property][i])){
            return true;
          }else{
            this.notifications.error("Atenção!", "O Endereço que você está tentando acessar não existe ou você não possui privilégios de acesso!");
            this.router.navigateByUrl(this.router.url);
            return false;
          }
        }
      }
      }
    }
    return false;
  }
  public allowedRoute(route: any): boolean{
      return (route.enable != false || route.enableRoute) 
      && this.commons.allowedDomain(route)
      && this.commons.allowedGroups(route);
  }

}
