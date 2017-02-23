import { Component } from "@angular/core";

@Component( {
    selector: 'list-page',
    templateUrl: '/app/pages/list.template.html'
})
export class ListComponent {
     items = [{name: "Item1"}, {name: "Item2"}, {name: "Your Sister"}];
}