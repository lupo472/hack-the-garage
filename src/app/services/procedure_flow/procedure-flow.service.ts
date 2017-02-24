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

    //logic goes here
    loadProcedure(proc: any) {
        this.procedure = JSON.parse(proc);
        console.log("FLOW-SERVICE: -->> LOADING PROCEDURE: " + this.procedure.toString());
    }

    saveFlow() {
        return this.procService.saveProcedure(this.temp);
    }
    discardFlow() {
        //TODO: put procedure in temp
    }
}