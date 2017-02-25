import { MasterData } from './master-data'
import { ProjectType } from './project-type'

export class Procedure {
    constructor(){
        this.masterData = new MasterData();
        this.projectData = {};
        this.projectType = new ProjectType();
    }
    masterData: MasterData;
    projectData: any;
    projectType: ProjectType;

    static absorbe(target: Procedure, source: Procedure) {
        //Object.assign(target.masterData.applicant, source.masterData.applicant);
        //Object.assign(target.masterData.company, source.masterData.company);
        Object.assign(target.projectType, source.projectType);
        Object.assign(target.projectData, source.projectData);
    }
}