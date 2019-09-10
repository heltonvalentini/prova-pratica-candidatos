import {Inject} from "@angular/core";
import {HttpService} from "../shared/services/http/http.service";
import * as CriptoJS from 'crypto-js';
import {Observable} from "rxjs";
export class LoginService {
  constructor(@Inject(HttpService) private httpService: HttpService) {
  }
  path: string = 'auth';
  key: string = 'QEd8TGwxVkBsM0NAcmRUcnxjQMKsZA==';
  
  encryptPass(_pass): String {
      var words = CriptoJS.enc.Base64.parse(this.key);
      var textString = CriptoJS.enc.Utf8.stringify(words);
      var keyHex = CriptoJS.enc.Utf8.parse(textString);

      var encrypted = CriptoJS.DES.encrypt(_pass, keyHex, {
        mode: CriptoJS.mode.ECB,
        padding: CriptoJS.pad.Pkcs7
      });

      return encrypted.toString();
   }

  doLogin(data): Observable<any> {
	data.password = this.encryptPass(data.password);
    return this.httpService.doPost(this.path, data, false, true);
  }
  forgotMyPass(data): Observable<any>{
    return this.httpService.doPost('forgot-password', data, false, true);
  }
  doLogout(){
    localStorage.removeItem('currentUser');
  }
}
