import {MasterDataComponent} from "../components/procedure_flow/master-data.component";
declare let jsPDF : any;
import {Component} from "@angular/core";
import {MasterData} from '../model/master-data';

@Component({
    selector: 'pdf',
    templateUrl: '/app/pages/pdf.template.html'
})

export class PdfComponent {
    private fileReader: FileReader = new FileReader();
    private base64Encoded: string;
    private myInputValue: string;
    constructor() {
        this.fileReader.onload = (file) => {
            this.base64Encoded = this.fileReader.result;
            console.log("Encoded file!");
        }
    }

    

    public download() {

        var doc = new jsPDF();
        // doc.text(20, 20, 'Hello world!');
        // doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
        // doc.addPage();
        // doc.text(20, 20, 'Do you like that?');
        doc.fromHTML('<h2>Applicant Master Data</h2>' +
            ' <p> This is a hindi developer </p> ' +
            '<h2>Company Master Data</h2> ' +
            '<p>This is hindi company</p> ' +
            '<h2>Business Plan</h2> ' +
            '<p>Hindi freelancing</p>');

        // Save the PDF
        doc.save('Test.pdf');
    }


    encodeFile(f : File) {
        this.fileReader.readAsText(f);
    }

}

/*
var handleFileSelect = function(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
        var reader = new FileReader();

        reader.onload = function(readerEvt) {
            var binaryString = readerEvt.target.result;
            console.log ( btoa(binaryString));
        };

        reader.readAsBinaryString(file);
    }
};

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('filePicker').addEventListener('change', handleFileSelect, false);
} else {
    alert('The File APIs are not fully supported in this browser.');
}*/