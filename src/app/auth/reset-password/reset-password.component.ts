import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, AbstractControl } from '@angular/forms';
import { FormValidators } from '@syncfusion/ej2-angular-inputs';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ResetPasswordComponent implements OnInit {

  faLock = faLock;
  faArrowRight = faArrowRight;

  reactForm: FormGroup;
  constructor() {
    this.reactForm = new FormGroup({
      'email': new FormControl('', [FormValidators.email]), 
    });

}

ngOnInit(): void {
  let formId: HTMLElement = <HTMLElement>document.getElementById('formId');
  document.getElementById('formId').addEventListener(
    'submit',
    (e: Event) => {
      e.preventDefault();
      if (this.reactForm.valid) {
        alert('Reset Password Link sent!');
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


get email() { return this.reactForm.get('email'); }


}
