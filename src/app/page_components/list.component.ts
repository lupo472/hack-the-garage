import { Component, OnInit } from "@angular/core";
import { ProcedureService } from "../services/procedure_flow/procedure.service";
import { UserService } from "../services/user.service"
import { Procedure } from "../model/procedure"

@Component( {
    selector: 'list-page',
    templateUrl: '/app/pages/list.template.html'
})
export class ListComponent implements OnInit {
    constructor(
        private procedureService: ProcedureService,
        private userService: UserService){

    }
    items: any;
    save: string;
    projectTypes: any;


    ngOnInit() {

       this.procedureService.getProcedureList().subscribe(
            procedures => this.items = procedures,
        );

/*
        let proc: Procedure = new Procedure();
        this.procedureService.saveProcedure(proc).subscribe(
            data => this.save = "Salvata Procedure",
        );
*/

        this.procedureService.getProjectTypeList().subscribe(
            projects => this.projectTypes = projects,
        );



    }
}