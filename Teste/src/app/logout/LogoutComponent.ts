import {Component} from "@angular/core";
import {Router} from "@angular/router";
@Component({
  selector: 'logout',
  template: ''
})
export class LogoutComponent{
  constructor(private router: Router){

  }
  ngOnInit(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
