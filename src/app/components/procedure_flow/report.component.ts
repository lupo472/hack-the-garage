import {Component} from "@angular/core";

import { ProcedureFlowService } from "../../services/procedure_flow/procedure-flow.service";


@Component( {
    selector: "report",
    templateUrl: "/app/components/procedure_flow/report.template.html"
})
export class ReportComponent {
    constructor(
        private flowService:ProcedureFlowService,
    ) { }

    allTheData: any = this.flowService.procedure.projectData
    ngOnInit(){
        console.log(this.allTheData)
    }
}


