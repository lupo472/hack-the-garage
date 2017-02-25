import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component( {
    selector: "welcome-page",
    templateUrl: "/app/pages/finanziamentipage.template.html",
})
export class WelcomeComponent{
    constructor(
        private router: Router
    ) {}
}