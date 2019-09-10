import {Router, NavigationStart} from "@angular/router";
import {Subject, Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class AlertMessageService {

  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          this.keepAfterNavigationChange = false;
        } else {
          this.subject.next();
        }
      }
    });
  }

  private message(clazz: string, message: string) {
    this.subject.next({
      class: clazz,
      value: message
    });
  }

  public success(message: string) {
    this.message('success', message);
  }

  public error(message: string) {
    this.message('danger', message);
  }

  public warning(message: string) {
    this.message('warning', message);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
