import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeInitComponent } from './employee-init/employee-init.component';
import { EmployeeSidenavComponent } from 'src/app/shared/shared-components/employee-sidenav/employee-sidenav.component';
import { ProfileComponent } from 'src/app/shared/shared-components/profile/profile.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { WorkreportComponent } from './workreport/workreport.component';
import { LogoutComponent } from 'src/app/shared/shared-components/logout/logout.component';
import { Page404Component } from 'src/app/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeInitComponent,
    children: [
      { path: 'employee-sidenav', component: EmployeeSidenavComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'timesheet', component: TimesheetComponent },
      { path: 'workreport', component: WorkreportComponent},
      // { path: 'logout', component: LogoutComponent},
      { path: '', redirectTo: 'employee-sidenav', pathMatch: 'full' },
      { path: '**', component: Page404Component },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
