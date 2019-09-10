import {Component} from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['home.component.css'],
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  transactions: any = {
    transaction: [],
    transactionFlag: [],
    transactionMode: []
  };

  summary: any = {
    icon: 'fa-newspaper-o',
    subject: 'home',
    title: 'Home',
  }

  currentView: string = "posts-tables";
}
