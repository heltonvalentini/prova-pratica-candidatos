import { rootRouterConfig } from "./app.routes";

//Modules
import { BrowserModule } from "@angular/platform-browser";
import { ChartModule } from "angular2-chartjs";
import { NgModule } from "@angular/core";
import { SelectModule } from "ng2-select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { AgGridModule } from "ag-grid-angular";
import { TabsModule } from 'ng2-tabs';
import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";
import { AutocompleteModule } from 'ng2-input-autocomplete';

//Components
import { AppComponent } from "./app.component";
import { AuthGuard } from "./shared/guards/auth.guard";
import { AuthorizationGuard } from "./shared/guards/authorization.guards";
import { CommonsComponent } from "./shared/commons/commons.component";
import { PanelPasswordsComponent } from "./panel/summary/panel-passwords/panelPasswords.component";
import { MasksComponent } from "./shared/commons/masks.component";
import { MenuComponent } from "./shared/components/menu/menu.component";
import { HomeComponent } from "./panel/summary/home/home.component";

//Services
import { HttpService } from "./shared/services/http/http.service";
import { NotificationsService } from "angular2-notifications";
import { RestService } from "./shared/services/rest/rest.service";
import { StorageService } from "./shared/services/storage/storage.service";

//Pipes
import { CurrencyBRLPipe } from "./shared/pipes/currencyBRL.pipe";
import { DateFilterPipe } from "./shared/pipes/dateFilter.pipe";
import { ReplacePipe } from "./shared/pipes/replace.pipe";
import { SafePipe } from "./shared/pipes/safe.pipe";
import { ToPatternPipe } from "./shared/pipes/toPattern.pipe";
import { LoginComponent } from "./login/login.component";
import { LoginService } from "./login/login.service";
import { PanelComponent } from "./panel/panel.component";
import { SummaryComponent } from "./panel/summary/summary.component";
import { LogoutComponent } from "./logout/LogoutComponent";
import { AlertMessageService } from "./shared/services/alert-message/alertMessage.service";
import { AlertMessageComponent } from "./shared/services/alert-message/alertMessage.component";
import { Page401Component } from "./panel/error-pages/401.component";
import { Page404Component } from "./panel/error-pages/404.component";
import { Ng2PaginationModule } from "ng2-pagination";
import { ModalModule } from "ngx-modal";
import { SimpleNotificationsModule } from "angular2-notifications";
import { SummaryService } from "./panel/summary/summary.service";
import { TooltipModule } from "ng2-tooltip";
import { LoadingBarModule, LoadingBarService } from "ng2-loading-bar";

//Directives
import { MaskDirective } from "./../app/shared/directives/mask.directive";


@NgModule({
  declarations: [
    AlertMessageComponent,
    AppComponent,
    CurrencyBRLPipe,
    DateFilterPipe,
    PanelPasswordsComponent,
    LoginComponent,
    LogoutComponent,
    MaskDirective,
    MenuComponent,
    Page401Component,
    Page404Component,
    PanelComponent,
    ReplacePipe,
    SafePipe,
    HomeComponent,
    SummaryComponent,
    ToPatternPipe,
    CalendarComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    BrowserModule,
    ChartModule,
    FormsModule,
    ModalModule,
    Ng2PaginationModule,
    TabsModule,
    SelectModule,
    ReactiveFormsModule,
    SimpleNotificationsModule,
    HttpModule,
    TooltipModule,
    LoadingBarModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    AutocompleteModule
  ],
  providers: [
    AuthGuard,
    AuthorizationGuard,
    AlertMessageService,
    AlertMessageComponent,
    CommonsComponent,
    DateFilterPipe,
    HttpService,
    LoginService,
    LoadingBarService,
    MasksComponent,
    NotificationsService,
    RestService,
    SafePipe,
    StorageService,
    SummaryService,
    ToPatternPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
