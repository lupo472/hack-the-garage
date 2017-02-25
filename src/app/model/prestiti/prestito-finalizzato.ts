import { Scheda } from "../scheda"

export class PrestitoFinalizzato {
    
    scheda1: Scheda;
    scheda2: Scheda;
    scheda3: Scheda;
    scheda4: Scheda;
    scheda5: Scheda;
    constructor() {
        this.scheda1 = new Scheda();
        this.scheda2 = new Scheda();
        this.scheda3 = new Scheda();
        this.scheda4 = new Scheda();
        this.scheda5 = new Scheda();
        this.scheda1.name = "Soggetto"
    }
}