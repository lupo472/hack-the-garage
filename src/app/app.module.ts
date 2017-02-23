//import libs
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

//import components
import {AppComponent} from './app.component';
import {HomeComponent}  from './page_components/home.component';
import {ListComponent}  from './page_components/list.component';
import {LoginComponent}  from './page_components/login.component';
import {RegisterComponent}  from './page_components/register.component';
import {DocSection} from './page_components/pdf.component';


import {ProcedureFlowComponent}  from './components/procedure_flow/procedure-flow.component';
import {MasterDataComponent}  from './components/procedure_flow/master-data.component';
import {ProjectPlanComponent}  from './components/procedure_flow/project-plan.component';


//import services
import { LangService } from './services/lang.service';
import { Strings } from './services/strings.service';
import { ProjectPlanService } from './services/procedure_flow/project-plan.service';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'list', component: ListComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports:      [ //global imports (all imported modules available for the module)
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    HttpModule,
    MaterialModule
  ],
  declarations: [ //components globally declared into project
    HomeComponent, 
    AppComponent, 
    ListComponent,
    LoginComponent,
    RegisterComponent,
    ProcedureFlowComponent,
    MasterDataComponent,
    ProjectPlanComponent,
    DocSection
  ],
  providers: [  //import services globally into project
    LangService,
    Strings,
    ProjectPlanService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}