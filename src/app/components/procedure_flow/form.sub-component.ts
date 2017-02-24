import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'my-form-sub-component',
    templateUrl: '/app/components/procedure_flow/form.sub-component.html'
})
export class MyFormSubComponent {
    @Input() myForm: FormGroup; // This component is passed a FormGroup from the base component template
}