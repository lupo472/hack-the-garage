import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";


import { ProcedureFlowService } from "../../services/procedure_flow/procedure-flow.service"

import { MasterData } from "../../model/master-data"

@Component( {
    selector: "master-data",
    templateUrl: "/app/components/procedure_flow/master-data.template.html"
})
export class MasterDataComponent {

    anagrafica: FormGroup = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        birthCountry: ['', Validators.required],
        birthCity: ['', Validators.required],
        birthDate: ['', Validators.required],
        taxCode: ['', Validators.required],
        country: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
        postalCode: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.pattern('/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/')]
    });

    submitted: boolean = false;

    constructor (private fb: FormBuilder,
                 private procedureFlow : ProcedureFlowService) {
    }

    onSubmit() {
        this.submitted = true;
    }
}