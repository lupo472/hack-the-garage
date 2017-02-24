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
    procedureUpdate:any;
    procedureDelete: any;
    userLoginSuccess: any;
    userLoginFail: any;
    userSignupSuccess: any;
    userSignupFail: any;


    ngOnInit() {
/*
         this.procedureService.deleteProcedure(5659313586569216).subscribe(
            deleted => this.procedureDelete = deleted,
        );

       this.procedureService.getProcedureList().subscribe(
            procedures => this.items = procedures,
        );


        let proc: Procedure = new Procedure();
        this.procedureService.saveProcedure(proc).subscribe(
            data => this.save = "Salvata Procedure",
        );

        this.procedureService.getProjectTypeList().subscribe(
            projects => this.projectTypes = projects,
        );

        this.procedureService.updateProcedure(5109799364591616,"Titolo riaggiornato", new Procedure()).subscribe(
            update => this.procedureUpdate = update,
        );
*/
/*
       this.userService.userLogin("l@l.com","123").subscribe(
            response => this.userLoginSuccess = response,
       );

       this.userService.userLogin("l@l.com", "1234").subscribe(
            response => this.userLoginFail = response,
       );

       this.userService.userSignUp("p@p.com", "Piccolo", "Pippo", "12345").subscribe(
           response => this.userSignupSuccess = response,
       );

       this.userService.userSignUp("l@l.com", "Luc", "Luc", "123").subscribe(
           response => this.userSignupFail = response,
       );
       */

    }
}