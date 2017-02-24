import {Component, OnInit, Input} from "@angular/core";

import { ProcedureFlowService } from "../../services/procedure_flow/procedure-flow.service"
import { ProjectPlanService } from "../../services/procedure_flow/project-plan.service"
import {FormArray, Validators, FormGroup, FormBuilder} from "@angular/forms";
import {ArrayType} from "@angular/compiler/src/output/output_ast";

@Component( {
    selector: "project-plan",
    templateUrl: "/app/components/procedure_flow/project-plan.template.html"
})
export class ProjectPlanComponent implements OnInit {
    constructor (
        private procedureService: ProcedureFlowService,
        private projectPlanService: ProjectPlanService,
    ) {}
    projectPlan: any;

    ngOnInit() {
        this.projectPlan = this.projectPlanService.getProjectPlan();

    }
    onSubmit(): void {
        // Your form value is outputted as a JavaScript object.
        // Parse it as JSON or take the values necessary to use as you like
    }
}

