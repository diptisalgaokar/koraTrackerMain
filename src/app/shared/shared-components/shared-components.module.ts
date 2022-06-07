import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsRoutingModule } from './shared-components-routing.module';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { EmployeeSidenavComponent } from './employee-sidenav/employee-sidenav.component';


@NgModule({
  declarations: [
    LogoutComponent,
    ProfileComponent,
    EmployeeSidenavComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsRoutingModule
  ]
})
export class SharedComponentsModule { }
