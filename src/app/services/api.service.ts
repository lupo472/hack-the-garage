import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Procedure } from '../model/procedure'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
    private apiUrl = 'https://hackthegarage.appspot.com/_ah/api/hackthegarage/v1/';  // URL to web API

    constructor ( private http: Http ) { }

    getUser(): Observable<any> {
        return this.http.get(this.apiUrl + "get-user-data")
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    addUser(name: string): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiUrl + "api/bar-list", 
            { 
                name
            }, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }






    getMasterData(userId: number): Observable<any> {
        return this.http.post(this.apiUrl + "",{})
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getProjectPlanList(): Observable<any> {
        return this.http.post(this.apiUrl + "",{})
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getProjectTypeList(): Observable<any> {
        return this.http.post(this.apiUrl + "list_project_types", {})
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    saveProcedure(userId: number, procedureData: Procedure, title: string ): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiUrl + "save_procedure",
                        {
                            "user_id": userId,
                            "procedure_data": JSON.stringify(procedureData),
                            "procedure_title" : title
                        }, 
                        options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getProcedureList(userId: number): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiUrl + "list_procedures_for_user", {
                            user_id: userId
                        }, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

     getProcedure(procedureId: number): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiUrl + "get_procedure", {
                            id: procedureId
                        }, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    



    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
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
}