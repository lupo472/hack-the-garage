import { MasterData } from './master-data'
import { ProjectType } from './project-type'

export class Procedure{
    constructor(){
        this.masterData = new MasterData();
        this.projectData = {};
        this.projectType = new ProjectType();
    }
    masterData: MasterData;
    projectData: any;
    projectType: ProjectType;
}