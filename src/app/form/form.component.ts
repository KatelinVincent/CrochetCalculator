import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule, FormComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  project = this.formBuilder.group({
    rows: [null, Validators.required], 
    columns: [null, Validators.required],
    stitch: [null, Validators.required], 
    yarnSize: [null, Validators.required], 
    hookSize: [null, Validators.required]
  });
rowIterator : Array<number> = []
columnIterator : Array<number> = []

    constructor (private formBuilder: FormBuilder) {}

    onSubmit(){
      this.rowIterator = Array.from({ length: this.project.get('rows')?.value || 0 }, (_, index) => index);
      this.columnIterator = Array.from({ length: this.project.get('columns')?.value || 0 }, (_, index) => index);
    }
}
