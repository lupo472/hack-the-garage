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
        private fb: FormBuilder
    ) {}
    @Input() inputArray: Array<any>;
    myForm: FormGroup;
    projectPlan: any;

    ngOnInit() {
        this.projectPlan = this.projectPlanService.getProjectPlan();
        this.inputArray = new Array<any>();
        let newForm = this.fb.group({
            formArray: this.fb.array([])
        });
        const arrayControl = <FormArray>newForm.controls['formArray'];
        this.inputArray.forEach(item => {
            let newGroup = this.fb.group({
                itemPropertyOne: ['InitialValue', [Validators.required]],
                itemPropertyTwo: ['InitialValue', [Validators.minLength(5), Validators.maxLength(20)]]
            });
            arrayControl.push(newGroup);
        });

        this.myForm = newForm;
    }
    onSubmit(): void {
        console.log(this.myForm.value);
        // Your form value is outputted as a JavaScript object.
        // Parse it as JSON or take the values necessary to use as you like
    }
}

