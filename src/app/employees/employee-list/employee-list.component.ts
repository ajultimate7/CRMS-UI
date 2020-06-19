import { Component, OnInit} from '@angular/core';
import { EmployeeDTO } from '../employeeDTO.model';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';

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

  deactivateEmployee(id:number){
    let response = this.service.deactivateEmployee(id);
    response.subscribe((data)=>console.log(data));
    this.refreshData();
  }

}
