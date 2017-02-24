import{ Injectable } from '@angular/core'

import { ApiService } from './api.service'

@Injectable()
export class UserService{

    constructor(backend: ApiService){ }

    getUserId(): string{
        return "a.a@asd.com";
    }
}