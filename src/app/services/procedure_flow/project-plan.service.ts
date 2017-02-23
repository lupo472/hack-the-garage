import { Injectable } from '@angular/core';


@Injectable()
export class ProjectPlanService {
    constructor (
        //injections goes here
    ) { }

    //logic goes here
    getProjectPlan() {
        return [
                {
                    name: "Tab1",
                    inputs: [
                        {
                            type: "text",
                            name: "myName01"
                        },
                        {
                            type: "text",
                            name: "myName02"
                        },
                        {
                            type: "number",
                            name: "myName03"
                        }
                    ]
                },
                {
                    name: "Tab2",
                    inputs: [
                        {
                            type: "select",
                            name: "myName04",
                            options: [
                                {
                                    label: "Opzione1",
                                    value: 1
                                },
                                {
                                    label: "Opzione2",
                                    value: 2
                                }
                            ]
                        },
                        {
                            type: "radio",
                            name: "myName05",
                            options: [
                                {
                                    label: "Opzione1",
                                    value: 1
                                },
                                {
                                    label: "Opzione2",
                                    value: 2
                                }
                            ]
                        },
                        {
                            type: "check",
                            name: "myName06"
                        }
                    ]
                }
            ];
    }
}