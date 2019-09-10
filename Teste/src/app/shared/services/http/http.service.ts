import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {RestService} from "../rest/rest.service";
import {AlertMessageService} from "../alert-message/alertMessage.service";
import {NotificationsService} from "angular2-notifications";
import {LoadingBarService} from "ng2-loading-bar";
import {Router} from "@angular/router";

@Injectable()
export class HttpService {
  constructor(private http: Http,
              private restService: RestService,
              private notifications: NotificationsService,
              private loadingBarService: LoadingBarService,
              private router: Router) {
  }

  createAuthorizationHeader(headers: Headers) {
    var token = this.restService.getToken();
    headers.append('Authorization', token)
  }

  getHeaders() {
    var headers = new Headers();
    // this.createAuthorizationHeader(headers);
    headers.append("X-Session-Data", this.restService.getSessionToken())
    headers.append("Content-Type", "application/json");
    return headers;
  }

  private handleResponse(observable: Observable<Response>, get: boolean, nonDefaultDTO?: boolean) {
    var result = null;
    try {
            result = observable.map(res => {
        if(!nonDefaultDTO){
        var result = res.json();
        if (!result.success) {
          this.notifications.error("Atenção!", result.message || result.value)
          this.loadingBarService.complete();
        } else {
          if (!get) {
            this.notifications.success("Sucesso!", result.message);
          }
          this.loadingBarService.complete();
        }
        return result;
        }else{
          this.loadingBarService.complete();
          return res;
        }
      })
                .catch((error: any) => [
                        (this.endWithError(error))
                    ]
                );
        } catch (err) {
            this.loadingBarService.complete();
        }
        return result;
    }

    public endWithError(response) {
        if (response.status == 401) {
            Observable.apply(
                [
                    this.loadingBarService.complete(),
                    this.router.navigateByUrl('/login')
                ])
        } else {
          Observable.apply(
            [
              this.notifications.error("Atenção!","Serviço temporariamente indisponível"),
              this.loadingBarService.complete()
                ])
    }

  }

  public doGet(path: string, params: string) {
    if(params != null && params != ''){
      var url = this.restService.getHost() + '/' + path + '?' + params;
    }else{
      var url = this.restService.getHost() + '/' + path;
    }	
	
    return this.handleResponse(this.http.get(url, {headers: this.getHeaders()}), false);
  }

  public doPost(path: string, params?: any, get?: boolean, withoutToken?: boolean, nonDefaultDTO?: boolean, protheusService?: boolean) {
    this.loadingBarService.reset();
    this.loadingBarService.start();
    var url;
    if(protheusService)
      url= this.restService.getProtheusHost() + '/' + path;
    else
      url= this.restService.getHost() + '/' + path;
      
    if (withoutToken)
      return this.handleResponse(this.http.post(url, params), get);
    if (!params) params = {};
    params.cgc = this.restService.getCgc();
    params.cgcCpf = this.restService.getCgc();
    params.dominio = this.restService.getDominio();
    var requestOptions = new RequestOptions({headers: this.getHeaders()});
    if(nonDefaultDTO){
      requestOptions.responseType = ResponseContentType.Blob;
    }
    return this.handleResponse(this.http.post(url, params, requestOptions),get, nonDefaultDTO);
  }
}
