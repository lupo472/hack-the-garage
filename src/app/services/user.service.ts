import{ Injectable } from '@angular/core'

import { ApiService } from './api.service'

@Injectable()
export class UserService{

    constructor(private backend: ApiService){ }

    getUserId(): string{
        return "a.a@asd.com";
    }
    
    userLogin(email: string, password: string){
        return this.backend.login(email,password);
    }

    userSignUp(email: string, firstName: string, lastName: string, password: string){
        return this.backend.signUp(email,firstName,lastName,password);
    }
}