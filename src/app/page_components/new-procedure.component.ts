import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ProcedureService } from "../services/procedure_flow/procedure.service";
import { ProjectPlanService } from "../services/procedure_flow/project-plan.service";
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

import {ProjectType} from "../model/project-type"
import {Procedure} from "../model/procedure"

@Component( {
    selector: "new-procedure",
    templateUrl: "/app/pages/new-procedure.template.html"
})
export class NewProcedureComponent implements OnInit {
    constructor (
        private router: Router,
        private procedureService: ProcedureService,
        private projectPlanService: ProjectPlanService,
        private fb: FormBuilder,
    ) { }
    types: ProjectType;

    onCardSelected(t: ProjectType) {
        let procedure: Procedure = new Procedure();
        procedure.projectType = t;
        let proj = this.projectPlanService.getProjectTemplate(t.id);



        let navs = {};
        for (let i = 0; i < proj.length; i++) {
            let nav = proj[i];
            let firstLevelObj = {};

            for (let j = 0; j < nav.schede.length; j++) {
                let scheda = nav.schede[i];
                let secondLevelObj = {};

                for (let k = 0; k < scheda.sezioni.length; k++) {
                    let sezione = scheda.sezioni[k];
                    let thirdLevelObj = {};

                    for (let l = 0; l < sezione.input.length; l++) {
                        let input = sezione.input[l];
                        thirdLevelObj[input.key] = "";
                    }
                    secondLevelObj[sezione.key] = thirdLevelObj;
                }

                firstLevelObj[scheda.key] = secondLevelObj;
            }

            navs[nav.key] = firstLevelObj;
            console.log(firstLevelObj);
        }

        procedure.projectData = navs;

        this.procedureService.saveProcedure(procedure).subscribe((id: number)=> {
            this.router.navigate(["procedure", id]);
        });
    }

    ngOnInit() {
        this.procedureService.getProjectTypeList().subscribe(
            proc => this.types = proc,
        );
    }
}