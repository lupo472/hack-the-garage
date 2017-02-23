import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component( {
    selector: "home-page",
    templateUrl: "/app/pages/home.template.html",
    styleUrls: [ "/app/css/home.css" ],
})
export class HomeComponent {
    constructor(
        private router: Router
    ) {}
    name: "Home"; 
    goToHttp () {
        this.router.navigate(['/http']);
    }
}