import {Component} from "@angular/core";
import {LoginService} from "./login.service";
import {Router, ActivatedRoute} from "@angular/router";
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {MasksComponent} from "./../shared/commons/masks.component";
declare var $: any;
@Component({
  selector: 'login',
  styleUrls: ['login.component.css'],
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  constructor(private loginService: LoginService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private masks: MasksComponent) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
      }
    );
    this.forgotPassForm = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }

  error: string = "";
  returnUrl: string;
  loginForm: FormGroup;
  forgotPassForm: FormGroup;

  ngOnInit() {
    $('html').css("overflow","hidden");
    this.loginService.doLogout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/painel/resumo/home';
  }

  login(form: any) {
    this.loginService.doLogin(form)
      .subscribe(
        result => {
          [this.saveLogin(result)]
        },
        err => {
        }
      )
  }

  saveLogin(result: any){
    if(result.success) {
      var currentUser = result.value;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      
      if(currentUser.acessoColaborador){
      	this.router.navigate(['/painel/resumo/home']);
      } else {
    	localStorage.setItem('modal', "true");
    	this.router.navigate([this.returnUrl]);
      }
    }
  }

  public closeModal() {
    $('#myModal').modal('hide');
  }

  forgotMyPass(form: any){
    form.username = this.masks.unMaskInteger(form.username);
    this.loginService.forgotMyPass(form)
    .subscribe(
      result => [result.success == true ? [this.closeModal(), this.forgotPassForm.reset()] : null]
    );
  }
}
