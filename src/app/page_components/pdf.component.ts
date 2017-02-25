import {MasterDataComponent} from "../components/procedure_flow/master-data.component";
declare let jsPDF : any;
import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {MasterData} from '../model/master-data';
import { FileService } from '../services/file.service';
 
@Component({
    selector: 'pdf',
    templateUrl: '/app/pages/pdf.template.html'
})

export class PdfComponent {
    
    private base64Encoded: string;
    private myInputValue: string;
    private status: string;

    constructor(
        private fileService: FileService,
        private route: ActivatedRoute,
        ) { }

        download(id:string) {
            window.print();
        }

    fileChangeEvent(fileInput: any, id: number) {
        let reader: FileReader = new FileReader();
        let file: any;
        reader.onload = function(e: any) {
            file = e.target.result;
            let index: number = file.indexOf(",");
            let str: string = file.substr(index +1);
            /*console.log(str);*/
            let name: string;
            let mime: string;

            switch(id){
                case 1: {
                    name = "report.pdf";
                    mime = "application/pdf";
                    break;
                }
                case 2: {
                    let index1: number = file.indexOf(":");
                    let index2: number = file.indexOf(";");
                    let str: string = file.substr(index1 + 1, index2);
                    let ext: string = str.substring(str.indexOf("/") + 1);
                    console.log(str);
                    console.log(ext);
                    if(ext == "jpeg")
                        ext = "jpg";
                    name = "id_card." + ext;
                    mime = str;
                    console.log(name);
                    console.log(mime);
                    break;
                }
                case 3: {
                    let index: number = file.indexOf(":");
                    let str: string = file.substr(index + 1,file.indexOf(";"));
                    let ext: string = str.substring(str.indexOf("/" + 1));
                    if(ext == "jpeg")
                        ext = "jpg";
                    name = "certificate." + ext;
                    mime = str;
                    break;
                }
            }
            this.fileService.uploadFile(str, this.route.snapshot.params["id"], name, mime).subscribe(
                ()=> {
                    console.log("file uploaded");
                },
            );
            console.log("la tu mamma"); 
        }.bind(this);
         reader.readAsDataURL(fileInput.target.files[0]);

    }

    
    
    /*
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

    public fileChangeEvent(fileInput: any){
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            var file;
            reader.onload = function (e : any) {
                file = e.target.result;
                this.fileService.fileUpload(file).subscribe(response => this.status = response.status,);

            }
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }
    */
}