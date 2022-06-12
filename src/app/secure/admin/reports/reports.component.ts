import { Component, ViewChild, OnInit } from '@angular/core';
import { projData } from './projectDetails';
import { workData } from './wrkDesc';
import { EditService, PageService, CommandColumnService, CommandModel } from '@syncfusion/ej2-angular-grids';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  providers: [ EditService, PageService, CommandColumnService],
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
    public data!: Object[];
    public prjWorkData!: Object;
    public editSettings!: Object;
    public projectidrules!: Object;
    public projectnamerules!: Object;
    
    public assignedtorules!: Object;
    public pageSettings!: Object;
    public commands!: CommandModel[];

  public listObj!: DropDownListComponent;
 // define the JSON of data
  constructor(){
    this.data = projData;
  }

  // maps the appropriate column to fields property
  public fields: Object = { text: 'ProjectName', value: 'ProjectID' };
  // set the height of the popup element
  public height: string = '220px';
  // set the placeholder to DropDownList input element
  public waterMark: string = 'Select a project';
  // set the value to select an item based on mapped value at initial rendering
  public value: number = 1;    

  public onChange(args: any): void {
    var val:number = 0;
     if (this.listObj.value.toString() !== null){        
      var val = Number(this.listObj.value.toString());
     }
     //alert('Val=='+val);
      // update the text and value property values in property panel based on selected item in DropDownList
      //show work desc based on the project selected
      this.prjWorkData = workData[val];
      this.editSettings = { allowEditing: false, allowAdding: false, allowDeleting: false, mode: 'Normal', allowEditOnDblClick: false };
      this.projectidrules = { required: true };
      this.projectnamerules = { required: true };
      
      this.assignedtorules = { params: { popupHeight: '300px' }};
      this.pageSettings = { pageSize: 4,pageCount: 5};
  }
  ngAfterViewInit(e: any): void {        
      // call the change event's function after initialized the component.
      setTimeout(()=>
    {
      this.onChange(e);
   })
  }
}
