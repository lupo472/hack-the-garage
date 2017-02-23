import { Component } from "@angular/core";

import { ProcedureService } from "../../services/procedure_flow/procedure.service"

import { MasterDataComponent } from "./master-data.component"

import { MasterData } from "../../model/master-data"
import { CompanyData } from "../../model/company-data"
import { ApplicantData } from "../../model/applicant-data"

@Component( {
    selector: "procedure-flow",
    templateUrl: "/app/components/procedure_flow/procedure-flow.template.html",
    directives: [ MasterDataComponent ],
})
export class ProcedureFlowComponent {
    constructor (
        private procedureService: ProcedureService
    ) { }
    masterData: MasterData;
    childMasterData:MasterData = {
        applicant: new ApplicantData(),
        company: new CompanyData()
    };

    onMasterDataChange(data: MasterData) {
        console.log("PROCEDURE-FLOW: -->> master data has been saved");
    }
}