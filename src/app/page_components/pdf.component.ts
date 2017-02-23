declare let jsPDF : any;
import {Component} from "@angular/core";

@Component({
    selector: 'pdf',
    templateUrl: '/app/pages/pdf.template.html'
})

export class DocSection {

    constructor() {
    }

    public download() {

        var doc = new jsPDF();
        doc.text(20, 20, 'Hello world!');
        doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
        doc.addPage();
        doc.text(20, 20, 'Do you like that?');

        // Save the PDF
        doc.save('Test.pdf');
    }

}