import {Routes} from '@angular/router';


import {AuthGuard} from "./shared/guards/auth.guard";
import {AuthorizationGuard} from "./shared/guards/authorization.guards";
import {PanelPasswordsComponent} from "./panel/summary/panel-passwords/panelPasswords.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/LogoutComponent";
import {Page404Component} from "./panel/error-pages/404.component";
import {Page401Component} from "./panel/error-pages/401.component";
import {PanelComponent} from "./panel/panel.component";
import {HomeComponent} from "./panel/summary/home/home.component";
import {SummaryComponent} from "./panel/summary/summary.component";



export const rootRouterConfig: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'painel/resumo/home', pathMatch: 'full'},
  {path: '404', component: Page404Component},
  {path: '401', component: Page401Component},
  {path: 'logout', component: LogoutComponent},
  {path: 'home', redirectTo: 'painel', pathMatch: 'full'},
  {
    path: 'painel', canActivate: [AuthGuard],
    component: PanelComponent,
    children: [
      {
        path: 'resumo',
        component: SummaryComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent,
            canActivate: [AuthorizationGuard]
          },
          {
            path: 'gerenciamento-senhas',
            component: PanelPasswordsComponent,
            canActivate: [AuthorizationGuard]
          },
        ]
      }
    ]
  },
  { path: '**', redirectTo: 'painel/resumo/home'}
];
