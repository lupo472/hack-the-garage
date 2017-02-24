import { Injectable } from '@angular/core';

import { MasterData } from '../../model/master-data'
import {ApplicantData} from "../../model/applicant-data";
import {CompanyData} from "../../model/company-data";
import {Procedure} from "../../model/procedure";

@Injectable()
export class ProcedureFlowService {
    constructor (
        //injections goes here
    ) { }
    procedure: Procedure = new Procedure();
    temp: Procedure = new Procedure();

    //logic goes here
}