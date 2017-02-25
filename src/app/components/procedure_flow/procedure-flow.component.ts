import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { ProcedureFlowService } from "../../services/procedure_flow/procedure-flow.service"
import { ProcedureService } from "../../services/procedure_flow/procedure.service"

import { MasterDataComponent } from "./master-data.component"
import { ProjectPlanComponent } from "./project-plan.component"

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
    startMasterData: MasterData;

    @ViewChild(MasterDataComponent)
    private mDataChild: MasterDataComponent;
    @ViewChild(ProjectPlanComponent)
    private planChild: ProjectPlanComponent;

    ngOnInit() {
        this.procedureService.getProcedure(this.route.snapshot.params["id"]).subscribe(
            proc => {
                
                this.flowService.loadProcedure(proc);
                this.planChild.tryLoad();
                this.mDataChild.applyFormData();
            },
        );
        if (!this.projectPlanService.isReady()) this.router.navigate([""]);
    }

    onSave() {
        console.log("updating data");
        this.flowService.saveFlow(this.route.snapshot.params["id"]).subscribe(()=>{
            console.log("updated data");
            this.mDataChild.applyFormData();
        });
    }

    onDiscard() {
        console.log("discarding");
        this.flowService.discardFlow();
        this.router.navigate([""]);
    }

    onDelete() {
        console.log("deleting");
        this.flowService.deleteProcedure(this.route.snapshot.params["id"]).subscribe(()=>{
            this.router.navigate([""]);
        });
    }
}