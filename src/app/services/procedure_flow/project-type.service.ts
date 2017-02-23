import { Injectable } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { ProjectType } from '../../model/project-type'

@Injectable()
export class ProjectTypeService {

    private projectTypeList: ProjectType[] = [];
    private projectTypeListJSON: any;
    private errorMessage: String;

    constructor(private backend: ApiService){ }

    getProjectTypeList(){
        this.backend.getProjectTypeList().subscribe(
            projectTypeList => this.projectTypeListJSON = projectTypeList,
            error => this.errorMessage = <any>error
        );
        return this.projectTypeListJSON;
    }

    getErrorMessage():String{
        return this.errorMessage;
    }
}