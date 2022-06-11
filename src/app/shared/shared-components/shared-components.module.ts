import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsRoutingModule } from './shared-components-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminSidenavComponent } from './../../secure/admin/admin-sidenav/admin-sidenav.component';
import { EmployeeSidenavComponent } from './../../secure/employee/employee-sidenav/employee-sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';


@NgModule({
  declarations: [
    ProfileComponent,
    LogoutComponent,
    AdminSidenavComponent,
    EmployeeSidenavComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    UploaderModule,
    SharedComponentsRoutingModule
  ]
})
export class SharedComponentsModule { }
