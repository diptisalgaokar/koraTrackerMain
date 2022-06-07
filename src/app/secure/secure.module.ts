import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureInitComponent } from './secure-init/secure-init.component';


@NgModule({
  declarations: [
    SecureInitComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
