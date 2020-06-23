import { Component, OnInit} from '@angular/core';
import { EmployeeDTO } from '../employeeDTO.model';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  tableHeaders = ['ID','First Name','Last Name','Contact No','Username','Email Id'];

  employees: EmployeeDTO[];

  employeesListlength: number;
  
  constructor(
    private matDialog: MatDialog,
    private service: EmployeeService,
    private router: Router
    ){}

  ngOnInit(){
    this.refreshData();
  }

  refreshData(){
    let response = this.service.getAllEmployees();
    response.subscribe((data)=>this.employees=data);
    console.log(this.employees);
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
  }

}
