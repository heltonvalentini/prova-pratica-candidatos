import {Component, OnInit, Inject, Injectable} from '@angular/core';
import {AlertMessageService} from "./alertMessage.service";

@Component({
  selector: 'alert',
  templateUrl: 'alertMessage.component.html'
})

export class AlertMessageComponent {
  message: any;
  constructor(@Injectable() private alertService: AlertMessageService) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => { [this.message = message] });
  }
}
