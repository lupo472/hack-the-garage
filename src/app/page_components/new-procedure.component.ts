import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ProcedureService } from "../services/procedure_flow/procedure.service";

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
    ) { }
    types: ProjectType;

    onCardSelected(t: ProjectType) {
        let procedure: Procedure = new Procedure();
        procedure.projectType = t;
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