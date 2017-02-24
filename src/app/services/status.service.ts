import { Injectable } from "@angular/core";

@Injectable()
export class StatusService {
    constructor(
    ) {}
    private status: string = "standard";

    getState(): string  {
        return this.status;
    }
    setState(newStatus: string): void {
        this.status = newStatus;
    }
}