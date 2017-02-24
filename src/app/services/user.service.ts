import{ Injectable } from '@angular/core'

import { ApiService } from './api.service'

@Injectable()
export class UserService{

    constructor(backend: ApiService){ }

    getUserId(): number{
        return 1;
    }
}