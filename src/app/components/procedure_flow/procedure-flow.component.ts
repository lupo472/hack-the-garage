import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ProcedureFlowService } from "../../services/procedure_flow/procedure-flow.service"
import { ProcedureService } from "../../services/procedure_flow/procedure.service"
import { StatusService } from "../../services/status.service"

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
export class ProcedureFlowComponent implements OnInit, OnDestroy {
    constructor (
        private statusService: StatusService,
        private flowService: ProcedureFlowService,
        private procedureService: ProcedureService,
        private route: ActivatedRoute,
        private projectPlanService: ProjectPlanService
    ) { }

    onExit() {
        this.statusService.setState("standard");
    }

    onDiscard() {
            this.statusService.setState("standard");
    }

    onSave() {
        this.flowService.saveFlow().subscribe(()=>{
            swal("Success", "Successfully saved your data", "success");
        });
    }

    ngOnInit() {
        this.statusService.setState("proceduring");
        this.procedureService.getProcedure(this.route.snapshot.params["id"]).subscribe(
        proc => this.flowService.loadProcedure(proc),
        );
        this.projectPlanService.getTemplateProject("/hackthegarage.appspot.com/project_template/industrial.json").subscribe(
            template => {
                    this.flowService.setProjectTemplate(JSON.parse(template)); 
                    console.log(template);
            },
        );
    }
    ngOnDestroy() {
        this.statusService.setState("standard");
    }
}