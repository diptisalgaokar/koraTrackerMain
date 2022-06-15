//import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UploaderComponent, UploaderModule } from '@syncfusion/ej2-angular-inputs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { SharedComponentsModule } from './shared/shared-components/shared-components.module';
//import { NgbModule } from '@angular-bootstrap/ng-bootstrap';

import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
    

@NgModule({
    imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    ToolbarModule,
    NumericTextBoxAllModule,
    DialogModule,    
    CommonModule, 
    //HttpModule, 
    //JsonpModule,   
    AppRoutingModule,
    UploaderModule,
    DropDownListModule, 
    //NgModule
    SharedComponentsModule
  ],
  declarations: [
    AppComponent,
    Page404Component 
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
