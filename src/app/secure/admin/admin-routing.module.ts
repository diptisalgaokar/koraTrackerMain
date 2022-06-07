import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminInitComponent } from './admin-init/admin-init.component';
import { ProfileComponent } from 'src/app/shared/shared-components/profile/profile.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReportsComponent } from './reports/reports.component';
import { Page404Component } from 'src/app/page404/page404.component';
import { LogoutComponent } from 'src/app/shared/shared-components/logout/logout.component';

const routes: Routes = [
  {
    path: '', component: AdminInitComponent,
    children: [
      // { path: 'admin-sidenav', component: AdminSidenavComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'employee-details', component: EmployeeDetailsComponent },
      { path: 'projects', component: ProjectsComponent},
      { path: 'reports', component: ReportsComponent},
      { path: 'logout', component: LogoutComponent},
      { path: '', redirectTo: 'employee-details', pathMatch: 'full' },
      { path: '**', component: Page404Component },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
