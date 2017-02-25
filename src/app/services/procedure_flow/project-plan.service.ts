import { Injectable } from '@angular/core';
import { ApiService } from '../api.service'


@Injectable()
export class ProjectPlanService {
    constructor (
       private backend: ApiService
    ) { }

    private templateCache: any = new Object();
    private ready: boolean = false;

    //logic goes here
    getProjectTemplate(code: string) {
        return this.templateCache[code] || [];
    }

    cacheAll(){
        this.backend.getProjectTypeList().subscribe(
            (list)=> {
                for (var i of list) this.cacheTemplate(i.id);
            }
        );
    }
    isReady() { return this.ready; }
    private cacheTemplate(id:string) {
        this.backend.getTemplateProject(id).map((data)=> { return JSON.parse(data); }).subscribe(
            (data)=> {
                this.templateCache[id] = data;
                this.ready = true;
            }
        );
    }
}