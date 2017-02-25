import {Component, OnInit, Input, NgZone} from "@angular/core";

import { ProcedureFlowService } from "../../services/procedure_flow/procedure-flow.service"
import { ProjectPlanService } from "../../services/procedure_flow/project-plan.service"
import {FormArray, Validators, FormGroup, FormBuilder} from "@angular/forms";
import {ArrayType} from "@angular/compiler/src/output/output_ast";


@Component( {
    selector: "project-plan",
    templateUrl: "/app/components/procedure_flow/project-plan.template.html"
})
export class ProjectPlanComponent {
    constructor (
        private procedureService: ProcedureFlowService,
        private projectPlanService: ProjectPlanService,
        private _ngZone: NgZone,
    ) {}
    projectPlan: any;

    tryLoad = function() {
        let p = this.projectPlanService.isReady();
        if (p) {
            this.projectPlan = this.projectPlanService.getProjectTemplate(this.procedureService.procedure.projectType.id);
            
            
            //LORENZO CARICA QUI LA ROBA, QUESTO è IL TUO SPAZIO ;)
            //GUARDA DI LA' COME HO GESTITO ANCHE IL RIEMPIMENTO DEI DATI...
            //LA FUNZIONE SOTTO APPLYFORMDATA() VIENE GIà CHIAMATA A DOVERE (O QUASI, NON POSSO TESTARE FINCHé NON FINISCI LA MAPPATURA)
            //USALA PER RIEMPIRE I CAMPI CON PATCHdATA COME DI Là

        } else {
            setTimeout(this.tryload, 200);
        }
    }

    applyFormData() {

    }
}

