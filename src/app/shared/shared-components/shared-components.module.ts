import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsRoutingModule } from './shared-components-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { EmployeeSidenavComponent } from './employee-sidenav/employee-sidenav.component';


@NgModule({
  declarations: [
    ProfileComponent,
    LogoutComponent,
    AdminSidenavComponent,
    EmployeeSidenavComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsRoutingModule
  ]
})
export class SharedComponentsModule { }
