import { Component } from "@angular/core";
import { UserService } from "../services/user.service"
import { Router } from "@angular/router";


@Component( {
    selector: "register-page",
    templateUrl: "/app/pages/register.template.html"
})
export class RegisterComponent {
    constructor (
        private userService: UserService,
        private router: Router,
        
    ) {}

    firstName: string;
    lastName: string;
    email: string;
    password: string;
    private response: string;

    onRegisterButtonClick(){
        this.userService.userSignUp(this.email, this.firstName, this.lastName, this.password).subscribe(
            response => {
                if(response.status){
                        alert("Utente già presente");
                }
                else {
                    console.log(response);
                        this.router.navigate(["login"]);
                }

            },
        );
        
        
    }


}