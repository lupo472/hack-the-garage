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


    ngOnInit() {

        this.procedureService.getProcedureList().subscribe(
            procedure => this.items = procedure,
        );


        let proc: Procedure = new Procedure();
        this.procedureService.saveProcedure(proc).subscribe(
            data => this.save = "Salvata Procedure",
        );
    }
}