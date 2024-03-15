import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeeService } from 'app/core/service/employee.service';
import { ApplyLeaveComponent } from 'app/hr/leave-management/popups/apply-leave/apply-leave.component';
import { CautionPopupComponent } from 'app/shared/popups/caution-popup/caution-popup.component';
import { SuccessPopupComponent } from 'app/shared/popups/success-popup/success-popup.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private empService: EmployeeService 
  ) { }
  ngOnInit(): void {
    this.getEmpList();
  }

  openProfile(){
    this.router.navigateByUrl('/hr-employees/employee-profile');
  }

  onClickEdit(){
    this.router.navigateByUrl('/hr-employees/add-employee');
  }
  
  
  caution() {
    
    this.dialog.open(CautionPopupComponent, {
      autoFocus: false
    })
  }

  displayedColumns: string[] = ['no', 'Image', 'Name', 'Department', 'Role', 'Mobile', 'Email', 'Access', 'Action'];
  dataSource = new MatTableDataSource<any>([]);

  getEmpList(){
    this.empService.getEmployeeList().subscribe((res)=> {
      this.dataSource= res;
      console.log(this.dataSource);
      
    })
  }
}