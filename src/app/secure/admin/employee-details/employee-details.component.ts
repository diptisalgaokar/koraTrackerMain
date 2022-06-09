import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, AbstractControl } from '@angular/forms';
import { FormValidators } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  public data: Object[] = [
    { E_ID:10248,	First_Name: 'Maria', Last_Name:'Jonas',	Email:'a@g.com', Contact:'1234567890' },
    { E_ID:10249,	First_Name: 'Ana',	Last_Name:'Trujillo', Email:'a@g.com',	Contact:'1234567890' },
    { E_ID:10250,	First_Name: 'Antonio',	Last_Name:'Moreno', Email:'a@g.com',	Contact:'1234567890' },
    { E_ID:10251,	First_Name: 'Thomas',	Last_Name:'Hardy', Email:'a@g.com',	Contact:'1234567890' },
    { E_ID:10252,	First_Name: 'Christina', Last_Name:'Berglund',	Email:'a@g.com',	Contact:'1234567890' },
    { E_ID:10253,	First_Name: 'Hanna', Last_Name:'Moo',	Email:'a@g.com',	Contact:'1234567890' },
    
    
    
      ];
    
      reactForm: FormGroup;
      constructor() {
        this.reactForm = new FormGroup({
          'fname': new FormControl('', [FormValidators.required]),
          'lname': new FormControl('', [FormValidators.required]),
          'email_check': new FormControl('', [FormValidators.email]),
          'contact': new FormControl('', [FormValidators.required]),
        });
    
    }
    
    ngOnInit(): void {
      let formId: HTMLElement = <HTMLElement>document.getElementById('formId');
      document.getElementById('formId').addEventListener(
        'submit',
        (e: Event) => {
          e.preventDefault();
          if (this.reactForm.valid) {
            alert('Employee details added!');
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
    
    get fname() { return this.reactForm.get('fname'); }
    get lname() { return this.reactForm.get('lname'); }
    get email_check() { return this.reactForm.get('email_check'); }
    get contact() { return this.reactForm.get('contact'); }

}
