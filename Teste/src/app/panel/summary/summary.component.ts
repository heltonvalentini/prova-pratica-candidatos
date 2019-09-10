import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {MENUS} from "../menus.component";

declare var $: any;
@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['summary.component.css'],
})
export class SummaryComponent {
  constructor(private router: Router) {
  }
  
  menus = MENUS.SUMMARY;

  ngOnInit(){
    this.router.navigateByUrl(this.menus[0].fullRoute);
  }

}
