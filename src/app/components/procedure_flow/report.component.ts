import {Component} from "@angular/core";

import { ProcedureFlowService } from "../../services/procedure_flow/procedure-flow.service";
import { ProjectPlanService } from "../../services/procedure_flow/project-plan.service";

import { KeysPipe } from '../../pipes/keys.pipe';


@Component( {
    selector: "report",
    templateUrl: "/app/components/procedure_flow/report.template.html"
})
export class ReportComponent {
    constructor(
        private flowService:ProcedureFlowService,
        private planService:ProjectPlanService,
    ) { }
    
    template: any = {};
    allTheData: any = {};

    loadData() {
        //questo viene chiamato
        this.allTheData = this.flowService.procedure.projectData;

        let proj = this.planService.getProjectTemplate(this.flowService.procedure.projectType.id);

        let navs = {};
        for (let i = 0; i < proj.length; i++) {
            let nav = proj[i];
            let firstLevelObj = {};

            for (let j = 0; j < nav.schede.length; j++) {
                let scheda = nav.schede[j];
                let secondLevelObj = {};

                for (let k = 0; k < scheda.sezioni.length; k++) {
                    let sezione = scheda.sezioni[k];
                    let thirdLevelObj = {};

                    for (let l = 0; l < sezione.input.length; l++) {
                        let input = sezione.input[l];
                        thirdLevelObj[input.key] = {label: input.nome, value: ""};
                    }
                    secondLevelObj[sezione.key] = {label: sezione.nome, value: thirdLevelObj};
                }

                firstLevelObj[scheda.key] = {label: scheda.nome, value: secondLevelObj};
            }

            navs[nav.key] = {label: nav.nome, value: firstLevelObj};
        }

        for (let i in navs) {
            for (let j in navs[i].value) {
                for (let k in navs[i].value[j].value) {
                    for (let l in navs[i].value[j].value[k].value) {
                        navs[i].value[j].value[k].value[l].value = this.allTheData[i][j][k][l];
                    }
                }
            }
        }
        this.allTheData = navs;
        console.log(this.allTheData);

    }
}


