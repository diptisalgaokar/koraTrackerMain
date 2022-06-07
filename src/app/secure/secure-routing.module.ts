import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from '../page404/page404.component';
import { SecureInitComponent } from './secure-init/secure-init.component';

const routes: Routes = [
  {
    path: '', component: SecureInitComponent, children: [
      { path: '', redirectTo: 'secure', pathMatch: 'full' },
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
      path: 'employee',
      loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
    },
    { path: '**', component: Page404Component },
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
