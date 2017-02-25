import { Injectable } from "@angular/core";
import { ApiService } from "../services/api.service"

@Injectable()
export class FileService {
    constructor(
        private backend: ApiService,
    ) {}
    uploadFile(file: string, procedureId: string, name: string, ext: string) {
        this.backend.uploadFile(procedureId,file,name, ext).subscribe(
            response => {
                console.log(response);
            }
        );
    }
}