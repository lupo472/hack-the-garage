import {Component} from "@angular/core";

import { ProcedureFlowService } from "../../services/procedure_flow/procedure-flow.service";

import { KeysPipe } from '../../pipes/keys.pipe';


@Component( {
    selector: "report",
    templateUrl: "/app/components/procedure_flow/report.template.html"
})
export class ReportComponent {
    constructor(
        private flowService:ProcedureFlowService,
    ) { }
    

    allTheData: any = {};

    loadData() {
        //questo viene chiamato 
        this.allTheData = this.flowService.procedure.projectData;
        console.log(this.allTheData);

    }
}


