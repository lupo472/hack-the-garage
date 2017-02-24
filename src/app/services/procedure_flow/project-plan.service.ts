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
                /*
                {
                    "name": "Tab1",
                    "inputs": [
                        {
                            "type": "text",
                            "name": "myName01"
                        },
                        {
                            "type": "text",
                            "name": "myName02"
                        },
                        {
                            "type": "number",
                            "name": "myName03"
                        }
                    ]
                },
                {
                    "name": "Tab2",
                    "inputs": [
                        {
                            "type": "select",
                            "name": "myName04",
                            "options": [
                                {
                                    "label": "Opzione1",
                                    "value": 1
                                },
                                {
                                    "label": "Opzione2",
                                    "value": 2
                                }
                            ]
                        },
                        {
                            "type": "radio",
                            "name": "myName05",
                            "options": [
                                {
                                    "label": "Opzione1",
                                    "value": 1
                                },
                                {
                                    "label": "Opzione2",
                                    "value": 2
                                }
                            ]
                        },
                        {
                            "type": "check",
                            "name": "myName06"
                        }
                    ]
                }
            ];*/
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