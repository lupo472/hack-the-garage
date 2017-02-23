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
import {HttpComponent}  from './page_components/http.component';
import {DocSection} from './page_components/pdf.component';


import {ProcedureFlowComponent}  from './components/procedure_flow/procedure-flow.component';
import {MasterDataComponent}  from './components/procedure_flow/master-data.component';


//import services
import { LangService } from './services/lang.service';
import { Strings } from './services/strings.service';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'list', component: ListComponent},
    {path: 'http', component: HttpComponent},
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
    HttpComponent,
    ProcedureFlowComponent,
    MasterDataComponent,
    DocSection
  ],
  providers: [  //import services globally into project
    LangService,
    Strings
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}