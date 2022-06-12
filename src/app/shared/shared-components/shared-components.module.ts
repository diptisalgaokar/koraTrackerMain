import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
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
  ]
})
export class SharedComponentsModule { }
