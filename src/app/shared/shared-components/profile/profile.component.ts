import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators, AbstractControl, PatternValidator } from '@angular/forms';
import { FormValidators, RemovingEventArgs, UploaderComponent, UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { Event } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  reactForm: FormGroup;
  public uploadObj: UploaderComponent | undefined; 
  constructor() {
    this.reactForm = new FormGroup({
      'check': new FormControl('', [FormValidators.required]),
      'email_check': new FormControl('', [FormValidators.email]),
      'city': new FormControl('', [FormValidators.required]),
      'tel': new FormControl('', [FormValidators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'firstname': new FormControl('', [FormValidators.required]),
      'date_check': new FormControl('', [FormValidators.date]),
      'lastname': new FormControl('', [FormValidators.required]),
      'state': new FormControl('', [FormValidators.required]),
      'Address': new FormControl(''),
    });
   }

  ngOnInit(): void {
    return this.onSubmit();
  }

  onSubmit(): void {
    if (this.reactForm.valid) {
      alert("Form Submitted!"+"\nUser Name: "+this.reactForm.get('check')?.value
      +"\nEmail: "+this.reactForm.get('email_check')?.value
      +"\nDOB: "+this.reactForm.get('date_check')?.value
      +"\nAddress: "+this.reactForm.get('Address')?.value
      +"\nCity: "+this.reactForm.get('city')?.value
      +"\nState: "+this.reactForm.get('state')?.value
      +"\nProfile pic: "+this.uploadObj?.filesData[0].name
      );

      this.uploadObj?.setDisabledState; 
      this.uploadObj?.cancel();
      this.reactForm.reset();
    }    
  }
        
/* Pic uploader controls*/ 
  public buttons = { browse: "Choose File", clear: "Clear", upload: "Upload" };
  public asyncSettings = {
    saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
  };
  public autoUpload = false;

  get check() { return this.reactForm.get('check'); }
  get email_check() { return this.reactForm.get('email_check'); }
  get date_check() { return this.reactForm.get('date_check'); }
  get city() { return this.reactForm.get('city'); }
  get state() { return this.reactForm.get('state'); }
  get Address() { return this.reactForm.get('Address'); }
  get profPicUploader() { return this.uploadObj?.files[0].name;}

}
