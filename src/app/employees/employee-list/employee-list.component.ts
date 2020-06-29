import { Component, OnInit} from '@angular/core';
import { EmployeeDTO } from '../employeeDTO.model';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modal/modal.component';
import { stringify } from 'querystring';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  tableHeaders:String[] = ['ID','First Name','Last Name','Contact No','Username','Email Id','Action'];

  employees: EmployeeDTO[];

  employeesListlength: number;

  public searchParams: any={
    firstName:null,
    lastName:null,
    status:null,
    id:null
  };
  
  constructor(
    private matDialog: MatDialog,
    private service: EmployeeService,
    private router: Router
    ){}

  ngOnInit(){
    this.refreshData();
  }

  refreshData(){
    console.log("refresh data called");
    // this.searchParams.status='Active';
    // this.searchParams.id='15';
    this.searchParams.firstName='ninja';
    // this.searchParams.status='Active';
    let response = this.service.getAllEmployees(this.searchParams);
    // let response = this.service.getAllActiveEmployees();
    response.subscribe((data)=>this.employees=data);
  }

  updateEmployee(id:number){
    console.log(id);
    this.router.navigate(['update',id]);
  }

  openModal(id: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "200px";
    dialogConfig.width = "300px";
    dialogConfig.data = {
      id: id
    }
    const modalDialog = this.matDialog.open(ModalComponent,dialogConfig);
    modalDialog.afterClosed().subscribe(result => this.refreshData());
  }

}
