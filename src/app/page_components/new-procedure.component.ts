import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ProcedureService } from "../services/procedure_flow/procedure.service";

import {ProjectType} from "../model/project-type"
import {Procedure} from "../model/procedure"

@Component( {
    selector: "new-procedure",
    templateUrl: "../pages/new-procedure.template.html"
})
export class NewProcedureComponent implements OnInit {
    constructor (
        private router: Router,
        private procedureService: ProcedureService,
    ) { }
    types: ProjectType;

    onCardSelected(id: string) {
        let procedure: Procedure = new Procedure();
    }

    ngOnInit() {
        this.procedureService.getProjectTypeList().subscribe(
            proc => this.types = proc,
        );
    }
}