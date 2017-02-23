import { Component, OnInit } from "@angular/core";
import { Strings } from '../services/strings.service';

@Component( {
    selector: "http-page",
    templateUrl: "/app/pages/http.template.html"
})
export class HttpComponent implements OnInit {
    constructor (
        private strings: Strings
    ) {}

     item() { return this.strings.getString("home", "header"); };

     ngOnInit() {
        this.strings.changeLanguage("it");
     }
}