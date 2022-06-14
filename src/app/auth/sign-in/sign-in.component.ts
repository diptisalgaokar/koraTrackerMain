import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, AbstractControl, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { FormValidators } from '@syncfusion/ej2-angular-inputs';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignInComponent implements OnInit {

  faLock = faLock;
  faArrowRight = faArrowRight;

  reactForm: FormGroup;
  constructor() {
    this.reactForm = new FormGroup({
      'email': new FormControl('', [FormValidators.email]),
      'password': new FormControl('', [FormValidators.required]),  
    });
  }

  ngOnInit(): void {      
     let formId: HTMLElement = <HTMLElement>document.getElementById('formId');
        document.getElementById('formId').addEventListener(
          'submit',
          (e: Event) => {
            e.preventDefault();
            if (this.reactForm.valid) {
              alert('Logged In Successfully!');
              this.reactForm.reset();
            } else {
              alert('Failed to Login!');
              // validating whole form
              Object.keys(this.reactForm.controls).forEach(field => {
                const control = this.reactForm.get(field);
                control.markAsTouched({ onlySelf: true });
              });
            }
          });
  }

  get email() { return this.reactForm.get('email'); }
  get password() { return this.reactForm.get('password'); }
}
