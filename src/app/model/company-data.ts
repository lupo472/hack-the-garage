export class CompanyData {
    name: string;
    vat: string;
    country: string;
    city: string;
    address: string;
    postalCode: number;
    phone: string;
    email: string;
    constructor() {
        this.name = "";
        this.vat = "";
        this.country = "";
        this.city = "";
        this.address = "";
        this.postalCode = 0;
        this.phone = "";
        this.email = "";
    }
}