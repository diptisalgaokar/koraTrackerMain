import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public data: string[] = ['Project1', 'Project2', 'Project3', 'Project4', 'Project5'];
  public datedata: string[] = ['Today', 'Yesterday', 'DayBeforeYest'];


}
