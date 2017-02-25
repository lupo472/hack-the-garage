import { Injectable } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { Procedure } from '../../model/procedure'
import { ProjectType } from '../../model/project-type'

import { UserService } from '../user.service'


@Injectable()
export class ProcedureService {

    private procedure: Procedure;
    private errorMessage: String;

    constructor(
        private backend: ApiService, 
        private user: UserService
        ){ }

    saveProcedure(procedureData: Procedure) {
        return this.backend.saveProcedure(this.user.getUserId(), procedureData, "Empty Procedure");
    }

    getProcedureList(){
       return this.backend.getProcedureList(this.user.getUserId());
        
    }

    getProcedure(procedureId: number){
        return this.backend.getProcedure(procedureId);
    }

    getProjectTypeList(){
        return this.backend.getProjectTypeList();
    }
    
    updateProcedure(procedureId: number, procedureData: Procedure){
        let title = procedureData.masterData.company.name + " for " + procedureData.masterData.applicant.lastName;
        return this.backend.updateProcedure(procedureId, title, procedureData);
    }

    deleteProcedure(procedureId: number){
        return this.backend.deleteProcedure(procedureId);
    }


    getErrorMessage():String{
        return this.errorMessage;
    }
}