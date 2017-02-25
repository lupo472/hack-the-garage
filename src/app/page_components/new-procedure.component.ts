import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ProcedureService } from "../services/procedure_flow/procedure.service";
import { ProjectPlanService } from "../services/procedure_flow/project-plan.service";

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
    ) { }
    types: ProjectType;

    onCardSelected(t: ProjectType) {
        let procedure: Procedure = new Procedure();
        procedure.projectType = t;
        let proj = this.projectPlanService.getProjectTemplate(t.id);
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