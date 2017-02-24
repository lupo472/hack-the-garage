import { Component } from "@angular/core";

import { ProcedureFlowService } from "../../services/procedure_flow/procedure-flow.service"

import { MasterDataComponent } from "./master-data.component"

import { MasterData } from "../../model/master-data"
import { CompanyData } from "../../model/company-data"
import { ApplicantData } from "../../model/applicant-data"

@Component( {
    selector: "procedure-flow",
    templateUrl: "/app/components/procedure_flow/procedure-flow.template.html",
    providers: [ ProcedureFlowService ],    //lo dichiaro qui così sarà disponibile solo da qui e figli, ogni ProcedureFlowComponent instanzierà un Service diverso
})
export class ProcedureFlowComponent {
    constructor (
        private procedureService: ProcedureFlowService
    ) { }

}