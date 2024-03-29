//import libs
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


//import components
import {AppComponent} from './app.component';
import {HomeComponent}  from './page_components/home.component';
import {ListComponent}  from './page_components/list.component';
import {LoginComponent}  from './page_components/login.component';
import {RegisterComponent}  from './page_components/register.component';
import {ProcedureListComponent}  from './page_components/procedure-list.component';
import {NewProcedureComponent}  from './page_components/new-procedure.component';
import {PdfComponent} from './page_components/pdf.component';
import {ProcedureFlowComponent}  from './components/procedure_flow/procedure-flow.component';
import {MasterDataComponent}  from './components/procedure_flow/master-data.component';
import {ProjectPlanComponent}  from './components/procedure_flow/project-plan.component';
import {WelcomeComponent} from './page_components/welcome.component';
import {ReportComponent} from './components/procedure_flow/report.component';

//import services
import {LangService} from './services/lang.service';
import {Strings} from './services/strings.service';
import {ProjectPlanService} from './services/procedure_flow/project-plan.service';
import {MasterDataService} from './services/procedure_flow/master-data.service';
import {ProcedureService} from './services/procedure_flow/procedure.service';
import {UserService} from './services/user.service';
import {StatusService} from './services/status.service';
import {ApiService} from './services/api.service';
import {FileService} from './services/file.service';

//import pipes
import { KeysPipe } from './pipes/keys.pipe';


const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'list', component: ListComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'procedure/:id', component: HomeComponent},
    {path: 'new-procedure', component: NewProcedureComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'procedure-list', component: ProcedureListComponent}
];

@NgModule({

    imports: [ //global imports (all imported modules available for the module)
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ //components globally declared into project
        HomeComponent,
        AppComponent,
        ListComponent,
        LoginComponent,
        RegisterComponent,
        NewProcedureComponent,
        ProcedureFlowComponent,
        ProcedureListComponent,
        MasterDataComponent,
        ProjectPlanComponent,
        PdfComponent,
        WelcomeComponent,
        ReportComponent,

        KeysPipe
    ],
    providers: [  //import services globally into project
        LangService,
        Strings,
        MasterDataService,
        ProcedureService,
        ProjectPlanService,
        UserService,
        ApiService,
        StatusService,
        FileService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}