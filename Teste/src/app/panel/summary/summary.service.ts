import { Injectable }     from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {HttpService} from "../../shared/services/http/http.service";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {RestService} from "../../shared/services/rest/rest.service";
import {Http} from "@angular/http";

@Injectable()
export class SummaryService {
  constructor (@Injectable() private httpService: HttpService,
               private restService: RestService,
               private  http: Http
  ) {}

  private path = 'summary';

  getPosts(days: number, type: string) : Observable<any> {
    return this.httpService.doPost(this.path + '/' + type,{days: days}, true);
  }

  obtemReturnPassword(filtro): Observable<any>{
    return this.httpService.doPost(this.path + 'obtemReturnPassword', filtro, true);
  }

  saveReturnPassword(item): Observable<any>{
    return this.httpService.doPost(this.path + 'saveReturnPassword', item, true);
  }

  deleteReturnPassword(item): Observable<any>{
    return this.httpService.doPost(this.path + 'deleteReturnPassword', item, true);
  }
}
