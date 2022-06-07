import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminInitComponent } from './admin-init/admin-init.component';
import { AdminSidenavComponent } from 'src/app/shared/shared-components/admin-sidenav/admin-sidenav.component';
import { ProfileComponent } from 'src/app/shared/shared-components/profile/profile.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReportsComponent } from './reports/reports.component';
import { LogoutComponent } from 'src/app/shared/shared-components/logout/logout.component';
import { Page404Component } from 'src/app/page404/page404.component';

const routes: Routes = [
  {
    path: '', component: AdminInitComponent,
    children: [
      { path: 'admin-sidenav', component: AdminSidenavComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'projects', component: ProjectsComponent},
      { path: 'reports', component: ReportsComponent},
      // { path: 'logout', component: LogoutComponent},
      { path: '', redirectTo: 'admin-sidenav', pathMatch: 'full' },
      { path: '**', component: Page404Component },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
