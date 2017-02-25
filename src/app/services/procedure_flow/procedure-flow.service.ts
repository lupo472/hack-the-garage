import { Injectable } from '@angular/core';

import { ProcedureService } from './procedure.service';

import { MasterData } from '../../model/master-data'
import {ApplicantData} from "../../model/applicant-data";
import {CompanyData} from "../../model/company-data";
import {Procedure} from "../../model/procedure";

@Injectable()
export class ProcedureFlowService {
    constructor (
        //injections goes here
        private procService: ProcedureService
    ) { }
    procedure: Procedure = new Procedure();
    temp: Procedure = new Procedure();
    projectTemplate: any;

    //logic goes here
    loadProcedure(proc: any) {
        this.procedure = JSON.parse(proc);
        console.log("FLOW-SERVICE: -->> LOADING PROCEDURE: " + this.procedure.toString());
    }

    saveFlow(id: number) {
        Procedure.absorbe(this.procedure, this.temp);
        return this.procService.updateProcedure(id, this.temp);
    }

    setProjectTemplate(template:any){
        this.projectTemplate = template;
    }

    discardFlow() {
        //TODO: put procedure in temp
        Procedure.absorbe(this.temp, this.procedure);
    }

    deleteProcedure(id: number) {
        return this.procService.deleteProcedure(id);
    }
}