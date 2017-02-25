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
        private fb: FormBuilder,
    ) {}
    proj: any;
    private ready:boolean = false;
    forms: FormGroup;
    isReady ():boolean { return this.ready; };
    
    tryLoad = function() {
        let p = this.projectPlanService.isReady();
        if (p) {
            this.proj = this.projectPlanService.getProjectTemplate(this.procedureService.procedure.projectType.id);
            



            let navs = {};
            for (let i = 0; i < this.proj.length; i++) {
                let nav = this.proj[i];
                let firstLevelObj = {};

                for (let j = 0; j < nav.schede.length; j++) {
                    let scheda = nav.schede[j];
                    let secondLevelObj = {};

                    for (let k = 0; k < scheda.sezioni.length; k++) {
                        let sezione = scheda.sezioni[k];
                        let thirdLevelObj = {};

                        for (let l = 0; l < sezione.input.length; l++) {
                            let input = sezione.input[l];
                            thirdLevelObj[input.key] = "";
                        }
                        secondLevelObj[sezione.key] = this.fb.group(thirdLevelObj);

                    }

                    firstLevelObj[scheda.key] = this.fb.group(secondLevelObj);
                }

                navs[nav.key] = this.fb.group(firstLevelObj);
            }
            this.forms = new FormGroup(navs);

            //
            this.forms.valueChanges.subscribe((data:any)=> {
                this.procedureService.procedure.projectData = data;
            });
            this.applyFormData();
            console.log(this.forms);
            this.ready = true;
            //LORENZO CARICA QUI LA ROBA, QUESTO è IL TUO SPAZIO ;)
            //GUARDA DI LA' COME HO GESTITO ANCHE IL RIEMPIMENTO DEI DATI...
            //LA FUNZIONE SOTTO APPLYFORMDATA() VIENE GIà CHIAMATA A DOVERE (O QUASI, NON POSSO TESTARE FINCHé NON FINISCI LA MAPPATURA)
            //USALA PER RIEMPIRE I CAMPI CON PATCHdATA COME DI Là

        } else {
            setTimeout(this.tryload, 200);
        }
    }

    applyFormData() {
        this.forms.patchValue(this.procedureService.procedure.projectData);
    }
    ngOnDestroy() {
        
    }
}

