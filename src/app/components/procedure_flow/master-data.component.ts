import { Component, Input } from "@angular/core";
import {FormControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";

import { ProcedureFlowService } from "../../services/procedure_flow/procedure-flow.service"

import { MasterData } from "../../model/master-data"

@Component( {
    selector: "master-data",
    templateUrl: "/app/components/procedure_flow/master-data.template.html"
})
export class MasterDataComponent {

    form: FormGroup;
    submitted: boolean = false;

    constructor (private fb: FormBuilder,
                 private procedureFlow : ProcedureFlowService) {
        this.createForm();
    }

    createForm() {
        this.form = this.fb.group({
            firstName: '',
            lastName: '',
            birthCountry: '',
            birthCity: '',
            birthDate: '',
            taxCode: '',
            country: '',
            city: '',
            address: {},
            postalCode: '',
            phone: '',
            email: ''
        })
    }

    ngOnChanges () {
        this.form.reset({
            firstName: '',
            lastName: '',
            birthCountry: '',
            birthCity: '',
            birthDate: '',
            taxCode: '',
            country: '',
            city: '',
            address: {},
            postalCode: '',
            phone: '',
            email: ''
        });
    }

    onSubmit() {

    }
}