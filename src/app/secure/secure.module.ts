import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureInitComponent } from './secure-init/secure-init.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';

@NgModule({
  declarations: [
    SecureInitComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    UploaderModule
  ],
  exports:[
    FormsModule, 
    ReactiveFormsModule,
    UploaderModule
  ]
})
export class SecureModule { }
