import { Component, OnInit } from "@angular/core";

import { ProcedureService } from "../services/procedure_flow/procedure.service"

@Component( {
    selector: "procedure-list-page",
    templateUrl: "/app/pages/procedure-list.template.html"
})
export class ProcedureListComponent implements OnInit {
    constructor (
        private procedureService: ProcedureService,
    ) {}
    procs: any;

    ngOnInit() {
        this.procedureService.getProcedureList().subscribe(
            data => this.procs = data,
        );
    }

}