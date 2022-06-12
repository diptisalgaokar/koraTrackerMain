//import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
//import { NgbModule } from '@angular-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
    

@NgModule({
  declarations: [
    AppComponent,
    Page404Component    
  ],
  imports: [
    GridModule,
    ToolbarModule,
    NumericTextBoxAllModule,
    DialogModule, 
    FormsModule,
    ReactiveFormsModule,
    CommonModule, 
    //HttpModule, 
    //JsonpModule, 
    BrowserModule,
    AppRoutingModule,
    UploaderModule,
    DropDownListModule, 
    //NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
