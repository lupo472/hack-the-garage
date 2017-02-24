import { Component } from '@angular/core';

import { StatusService } from './services/status.service';

@Component({
  selector: 'my-app',
  templateUrl: '/app/pages/index.template.html',
})
export class AppComponent  {
  constructor(
      private statusService: StatusService,
    ) { }
  name = 'Angular';

  state() {
    return this.statusService.getState();
  } 
}
