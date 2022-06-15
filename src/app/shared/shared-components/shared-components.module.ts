import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploaderComponent, UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { SharedComponentsRoutingModule } from './shared-components-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
//import { AdminSidenavComponent } from '../../secure/admin/admin-sidenav/admin-sidenav.component';
//import { EmployeeSidenavComponent } from '../../secure/employee/employee-sidenav/employee-sidenav.component';

@NgModule({
  declarations: [
    ProfileComponent, 
    LogoutComponent,
   // AdminSidenavComponent,
   // EmployeeSidenavComponent
  ],
  imports: [
    CommonModule,    
    UploaderModule,
    FormsModule, 
    ReactiveFormsModule,
    SharedComponentsRoutingModule
  ],
  exports:[
    FormsModule, 
    ReactiveFormsModule,
    UploaderModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class SharedComponentsModule { }
