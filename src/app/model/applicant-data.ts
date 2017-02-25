export class ApplicantData {
    firstName: string;
    lastName: string;
    bornCountry: string;
    bornCity: string;
    bornDate: Date;
    taxCode: string;
    country: string;
    city: string;
    address: string;
    postalCode: number;
    phone: string;
    email: string;
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.bornCountry = "";
        this.bornCity = "";
        this.bornDate = new Date();
        this.taxCode = "";
        this.country = "";
        this.city = "";
        this.address = "";
        this.postalCode = 0;
        this.phone = "";
        this.email = "";
    }
}