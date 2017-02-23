import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LangService {
    constructor( 
        private http: Http
    ) {}
    private allowedLanguages: string[] = ["it"];
    private cachedLanguages = {};

    private cacheLanguage(res: Response) {
        let body = res.json();
        console.log(body);
        return body || { };
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getLanguage(locale: string): Observable<Object> {
        var loc = locale.substr(0, 2).toLowerCase();
        if (this.allowedLanguages.indexOf(loc) != -1) {
            return this.http.get("/app/res/locales/" + loc + "/strings.json")
                            .map(this.cacheLanguage)
                            .catch(this.handleError);
        }
        //TODO: returning some error message
    }
}