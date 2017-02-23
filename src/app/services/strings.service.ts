import { Injectable } from "@angular/core";
import { LangService } from "./lang.service";

@Injectable()
export class Strings {
    constructor(
        private langs: LangService
    ) {}
    private data: Object;

    changeLanguage(locale: string) {
        this.langs.getLanguage(locale)
                    .subscribe(
                        (data:Object) => this.data = data
                    );
    }
    getString(page: string, key: string): string {
        if (this.data && this.data[page] && this.data[page][key]) return this.data[page][key];
        return "__nty__";
    }
}