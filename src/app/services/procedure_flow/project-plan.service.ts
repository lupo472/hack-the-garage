import { Injectable } from '@angular/core';
import { ApiService } from '../api.service'


@Injectable()
export class ProjectPlanService {
    constructor (
       private backend: ApiService
    ) { }

    getTemplateResponse: any;

    //logic goes here
    getProjectPlan() {
        return [
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
            ];
    }

    getTemplateProject(templateId: string){
        return this.backend.getTemplateProject(templateId);
    }
}