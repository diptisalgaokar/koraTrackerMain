import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent} from '@syncfusion/ej2-angular-navigations';
import { faBars, faUser, faUsers, faChartPie, faArrowRightFromBracket, faFileLines } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-sidenav',
  templateUrl: './employee-sidenav.component.html',
  styleUrls: ['./employee-sidenav.component.scss']
})
export class EmployeeSidenavComponent implements OnInit {

  faUser = faUser;
  faUsers = faUsers;
  faChartPie = faChartPie; 
  faArrowRightFromBracket = faArrowRightFromBracket; 
  faFileLines = faFileLines;
  faBars = faBars;
  ngOnInit(): void {
  }

  @ViewChild('sidebar')
    public sidebar: SidebarComponent;
    public width: string = '290px';
    public onCreated(args: any) {
         this.sidebar.element.style.visibility = '';
    }
    openClick(): void {
        this.sidebar.toggle();
    }
  constructor() { }


}
