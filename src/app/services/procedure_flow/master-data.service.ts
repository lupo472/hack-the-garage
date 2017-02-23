import { Injectable } from '@angular/core'

@Injectable()
export class MasterDataService{

    private masterData: MasterData;

    constructor(private backend: ApiService){ }
    
    getMasterData(userId: number){
        this.backend.getMasterData(userId).then((masterData: MasterData)=>);
    }

}