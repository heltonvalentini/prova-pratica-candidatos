import {Component} from '@angular/core';
import { RestService } from './shared/services/rest/rest.service';
import { StorageService } from "./shared/services/storage/storage.service";
import {Http } from "@angular/http";
declare var $: any;

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor(private rest: RestService, 
              private http: Http,
              private storage: StorageService){
    rest.setHost(
      this.getAPIProtocol() + "://" + 
      process.env.API_HOST +
      ":" + process.env.API_PORT +
      "/" + process.env.API_URL
    );
    rest.setProtheusHost(process.env.PROTHEUS_URL);
    storage.setHost(
      this.getSTORAGEProtocol() + "://" +
      process.env.STORAGE_HOST +
      ":" + process.env.STORAGE_PORT +
      "/" + process.env.STORAGE_URL
    );
  }

  loadingBarColor = "#ff6300";
  
  private getAPIProtocol(){
    return process.env.API_HTTPS ? "https" : "http";
  }
  private getSTORAGEProtocol(){
    return process.env.STORAGE_HTTPS ? "https" : "http";
  }

  alertOptions: any = {
    timeOut: 3000,
    preventLastDuplicates: true,
    maxStack: 1
  }

  ngOnInit(){
  }
}
