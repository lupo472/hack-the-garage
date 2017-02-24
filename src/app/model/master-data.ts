import { ApplicantData } from './applicant-data'
import { CompanyData } from './company-data'

export class MasterData {
    constructor(){
        this.applicant = new ApplicantData();
        this.company = new CompanyData();
    }
    applicant: ApplicantData;
    company: CompanyData;
}