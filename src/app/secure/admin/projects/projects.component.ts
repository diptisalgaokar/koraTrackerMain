import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, AbstractControl } from '@angular/forms';
import { FormValidators } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnInit {

  public data: Object[] = [
    { P_ID:10248,	Project_Name: 'Project1',	Description: 'hshhwrtyj5eu5ejk', Date:'7/4/1996' },
    { P_ID:10249,	Project_Name: 'Project2',	Description: 'hshhwrtyj5eu5ejk', Date:'7/5/1996' },
    { P_ID:10250,	Project_Name: 'Project3',	Description: 'hshhwrtyj5eu5ejk', Date:'7/8/1996' },
    { P_ID:10251,	Project_Name: 'Project4',	Description: 'hshhwrtyj5eu5ejk', Date:'7/8/1996' },
    { P_ID:10252,	Project_Name: 'Project5',	Description: 'hshhwrtyj5eu5ejk', Date:'7/9/1996' },
    { P_ID:10253,	Project_Name: 'Project6',	Description: 'hshhwrtyj5eu5ejk', Date:'7/10/1996' },
   ];

      reactForm: FormGroup;
      constructor() {
        this.reactForm = new FormGroup({
          'date': new FormControl('', [FormValidators.date]),
          'Description':new FormControl(''),
          'p_name': new FormControl('', [FormValidators.required]),
        });
    
    }
    
    ngOnInit(): void {
      let formId: HTMLElement = <HTMLElement>document.getElementById('formId');
      document.getElementById('formId').addEventListener(
        'submit',
        (e: Event) => {
          e.preventDefault();
          if (this.reactForm.valid) {
            alert('Project details added!');
            this.reactForm.reset();
          } else {
            // validating whole form
            alert('Failed!');
            Object.keys(this.reactForm.controls).forEach(field => {
              const control = this.reactForm.get(field);
              control.markAsTouched({ onlySelf: true });
            });
          }
        });
    }

    get date() { return this.reactForm.get('date'); }
    get Description() { return this.reactForm.get('Description'); }
    get p_name() { return this.reactForm.get('p_name'); }
    

}
