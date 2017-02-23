import { Injectable } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { Procedure } from '../../model/procedure'

@Injectable()
export class ProcedureService {

    private procedure: Procedure;
    private savedProcedureJSON: any;
    private gottenProcedureJSON: any;
    private errorMessage: String;


    constructor(private backend: ApiService){ }

    saveProcedure(userId: number, procedureData: String){
        this.backend.saveProcedure(userId,procedureData).subscribe(
            procedure => this.savedProcedureJSON = procedure,
            error => this.errorMessage = <any>error
        );
        return this.savedProcedureJSON;
    }

    getProcedure(userId: number){
        this.backend.getProcedure(userId).subscribe(
            procedure => this.gottenProcedureJSON = procedure,
            error => this.errorMessage = error
        );
        return this.gottenProcedureJSON;
    }
    
    getErrorMessage():String{
        return this.errorMessage;
    }
}