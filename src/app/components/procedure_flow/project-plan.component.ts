import { Component, OnInit } from "@angular/core";

import { ProcedureFlowService } from "../../services/procedure_flow/procedure-flow.service"
import { ProjectPlanService } from "../../services/procedure_flow/project-plan.service"

@Component( {
    selector: "project-plan",
    templateUrl: "/app/components/procedure_flow/project-plan.template.html"
})
export class ProjectPlanComponent implements OnInit {
    constructor (
        private procedureService: ProcedureFlowService,
        private projectPlanService: ProjectPlanService
    ) { }
    projectPlan: any;

    ngOnInit() {
        this.projectPlan = this.projectPlanService.getProjectPlan();
    }
}