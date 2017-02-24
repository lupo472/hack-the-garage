import {Component, OnInit, Input, NgZone} from "@angular/core";

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
        private _ngZone: NgZone,
    ) {}
    projectPlan: any;

    ngOnInit() {
        this.tryLoad();

    }
    private tryLoad = function() {
        let p = this.projectPlanService.isReady();
        if (p) {
            this.projectPlan = this.projectPlanService.getProjectTemplate("/hackthegarage.appspot.com/project_template/industrial.json");
        } else {
            setTimeout(this.tryload, 200);
        }
    }
    onSubmit(): void {
        // Your form value is outputted as a JavaScript object.
        // Parse it as JSON or take the values necessary to use as you like
    }
}

