import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";

@Component({
    selector: 'app-site-header',
    standalone: true,
    templateUrl: './site-header.component.html',
    styleUrl: './site-header.component.css',
    imports: [FormComponent]
})
export class SiteHeaderComponent {

}
