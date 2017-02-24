import { Injectable } from '@angular/core'
import { MasterData } from '../../model/master-data'
import { ApiService } from '../../services/api.service'

@Injectable()
export class MasterDataService{

    private masterData: MasterData;
    private errorMessage: String;


    constructor(private backend: ApiService){ }
    
    getMasterData(userId: string){
        this.backend.getMasterData(userId).subscribe(
            
        );
        return this.masterData;
    }
    
    getErrorMessage():String{
        return this.errorMessage;
    }

}