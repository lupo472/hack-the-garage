import { Injectable } from '@angular/core';

import { MasterData } from '../../model/master-data'
import {ApplicantData} from "../../model/applicant-data";
import {CompanyData} from "../../model/company-data";

@Injectable()
export class ProcedureFlowService {
    constructor (
        //injections goes here
    ) { }
    masterData: MasterData = {
        applicant: new ApplicantData(),
        company: new CompanyData()
    };

    //logic goes here
}