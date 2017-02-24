import { Component } from '@angular/core';

import { StatusService } from './services/status.service';
import { ProjectPlanService } from './services/procedure_flow/project-plan.service';

@Component({
  selector: 'my-app',
  templateUrl: '/app/pages/index.template.html',
})
export class AppComponent  {
  constructor(
      private statusService: StatusService,
      private projectPlanService: ProjectPlanService,
    ) { }
  name = 'Angular';

  ngOnInit() {
    
        this.projectPlanService.cacheAll();
  }
  state() {
    return this.statusService.getState();
  }
}
