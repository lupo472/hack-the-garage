import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { ProcedureFlowService } from "../../services/procedure_flow/procedure-flow.service"
import { ProcedureService } from "../../services/procedure_flow/procedure.service"

import { MasterDataComponent } from "./master-data.component"

import { MasterData } from "../../model/master-data"
import { CompanyData } from "../../model/company-data"
import { ApplicantData } from "../../model/applicant-data"
import { ProjectPlanService } from "../../services/procedure_flow/project-plan.service"

@Component( {
    selector: "procedure-flow",
    templateUrl: "/app/components/procedure_flow/procedure-flow.template.html",
    providers: [ ProcedureFlowService ],    //lo dichiaro qui così sarà disponibile solo da qui e figli, ogni ProcedureFlowComponent instanzierà un Service diverso
})
export class ProcedureFlowComponent implements OnInit {
    constructor (
        private flowService: ProcedureFlowService,
        private procedureService: ProcedureService,
        private route: ActivatedRoute,
        private projectPlanService: ProjectPlanService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.procedureService.getProcedure(this.route.snapshot.params["id"]).subscribe(
            proc => {
                
                this.flowService.loadProcedure(proc);
            },
        );
        if (!this.projectPlanService.isReady()) this.router.navigate([""]);
    }
}