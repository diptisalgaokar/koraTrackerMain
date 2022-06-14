import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { WorkreportComponent } from './workreport/workreport.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { EmployeeSidenavComponent } from './employee-sidenav/employee-sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';

@NgModule({
  declarations: [
    WorkreportComponent,
    TimesheetComponent,
    EmployeeSidenavComponent,
    
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FontAwesomeModule,
    SidebarModule,
    DropDownListModule,
    NumericTextBoxModule,
    TextBoxModule,
    FormsModule, 
    ReactiveFormsModule,
    UploaderModule
  ]
})
export class EmployeeModule { }
