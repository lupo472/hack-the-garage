import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


import {ProcedureFlowService} from "../../services/procedure_flow/procedure-flow.service"

import {MasterData} from "../../model/master-data"
import {ApplicantData} from "../../model/applicant-data";
import {CompanyData} from "../../model/company-data";

@Component({
    selector: "master-data",
    templateUrl: "/app/components/procedure_flow/master-data.template.html"
})
export class MasterDataComponent implements OnInit {

    applicantForm: FormGroup;
    companyForm: FormGroup;

    constructor(private fb: FormBuilder,
                private procedureFlow: ProcedureFlowService) {
    }
    
    applyFormData() {
        console.log("data has arrived");
        if (this.procedureFlow.procedure.masterData) {
            this.applicantForm.patchValue({
                applicantFirstName: this.procedureFlow.procedure.masterData.applicant.firstName,
                applicantLastName: this.procedureFlow.procedure.masterData.applicant.lastName,
                applicantBornCountry: this.procedureFlow.procedure.masterData.applicant.bornCountry,
                applicantBornCity: this.procedureFlow.procedure.masterData.applicant.bornCity,
                applicantBornDate: this.procedureFlow.procedure.masterData.applicant.bornDate,
                applicantTaxCode: this.procedureFlow.procedure.masterData.applicant.taxCode,
                applicantCountry: this.procedureFlow.procedure.masterData.applicant.country,
                applicantCity: this.procedureFlow.procedure.masterData.applicant.city,
                applicantAddress: this.procedureFlow.procedure.masterData.applicant.address,
                applicantPostalCode: this.procedureFlow.procedure.masterData.applicant.postalCode,
                applicantPhone: this.procedureFlow.procedure.masterData.applicant.phone,
                applicantEmail: this.procedureFlow.procedure.masterData.applicant.email
            });
            this.companyForm.patchValue({
                companyName:  this.procedureFlow.procedure.masterData.company.name,
                companyVat: this.procedureFlow.procedure.masterData.company.vat,
                companyCountry:  this.procedureFlow.procedure.masterData.company.country,
                companyCity: this.procedureFlow.procedure.masterData.company.city,
                companyAddress:  this.procedureFlow.procedure.masterData.company.address,
                companyPostalCode: this.procedureFlow.procedure.masterData.company.postalCode,
                companyPhone:  this.procedureFlow.procedure.masterData.company.phone,
                companyEmail: this.procedureFlow.procedure.masterData.company.email
            });
            console.log("aggiornata");
        }
    }

    ngOnInit() {
        this.applicantForm = this.fb.group({
            applicantFirstName: ['', Validators.required],
            applicantLastName: ['', Validators.required],
            applicantBirthCountry: ['', Validators.required],
            applicantBirthCity: ['', Validators.required],
            applicantBirthDate: ['', Validators.required],
            applicantTaxCode: ['', Validators.required],
            applicantCountry: ['', Validators.required],
            applicantCity: ['', Validators.required],
            applicantAddress: ['', Validators.required],
            applicantPostalCode: ['', Validators.required],
            applicantPhone: ['', Validators.required],
            applicantEmail: ['', Validators.pattern('/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/')],
        });

        this.companyForm = this.fb.group({
            companyName: ['', Validators.required],
            companyVat: ['', Validators.required],
            companyCountry: ['', Validators.required],
            companyCity: ['', Validators.required],
            companyAddress: ['', Validators.required],
            companyPostalCode: ['', Validators.required],
            companyPhone: ['', Validators.required],
            companyEmail: ['', Validators.pattern('/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/')]
        });

        this.applicantForm.valueChanges.subscribe((data) => {
            this.procedureFlow.temp.masterData.applicant = {
                firstName: data.applicantFirstName,
                lastName: data.applicantLastName,
                bornCountry: data.applicantBirthCountry,
                bornCity: data.applicantBirthCity,
                bornDate: data.applicantBirthDate,
                taxCode: data.applicantTaxCode,
                country: data.applicantCountry,
                city: data.applicantCity,
                address: data.applicantAddress,
                postalCode: data.applicantPostalCode,
                phone: data.applicantPhone,
                email: data.applicantEmail
            };
            console.log(this.procedureFlow.temp.masterData.applicant);
        });
        this.companyForm.valueChanges.subscribe((data) => {
            this.procedureFlow.temp.masterData.company = {
                name: data.companyName,
                vat: data.companyVat,
                country: data.companyCountry,
                city: data.companyCity,
                address: data.companyAddress,
                postalCode: data.companyPostalCode,
                phone: data.companyPhone,
                email: data.companyEmail
            };
            console.log(this.procedureFlow.temp.masterData.company);
        });

    }

}