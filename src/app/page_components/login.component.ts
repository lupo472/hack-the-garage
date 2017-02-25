import { Component } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";


@Component( {
    selector: "login-page",
    templateUrl: "/app/pages/login.template.html"
})
export class LoginComponent {
    constructor (private userService: UserService,
        private router: Router,
    ) {}

    email: string;
    password: string;
    private responseStatus: string;
    private responseData: string;

    onLoginButtonClick(){ 
        this.userService.userLogin(this.email, this.password).subscribe(response => {
            console.log(response);
            if(response.status){
                alert("Credenziali errate!");

            }
            else{
                this.userService.setLoggedIn(response);
                console.log(this.userService.getLoggedIn());
                this.router.navigate([""]);
            }
        },
         );
      

    }

    onLogoutButtonClick(){
        this.userService.setLoggedIn(null);
        this.router.navigate(["login"]);
    }

}