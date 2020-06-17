import { Component, OnInit } from '@angular/core';
import { EmployeeDTO } from '../employeeDTO.model';
import { AddEmployeeService } from 'src/app/add-employee.service';
import { EmployeeInDTO } from '../employeeInDTO.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  tableHeaders = ['ID','First Name','Last Name','Contact No','Username','Email Id'];

  employees: any;
  // EmployeeDTO[] = [
  //   // new EmployeeDTO('tom','cat',1,987654321,'tom.cat@neptune-ubi.com','tom.cat'),
  //   // new EmployeeDTO('jerry','mouse',2,123456789,'jerry.mouse@neptune-ubi.com','jerry.mouse')
  // ]
  constructor(private service: AddEmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }


  public getAllEmployees(){
    let response = this.service.getAllEmployees();
    response.subscribe((data)=>this.employees=data);
    // this.employees = this.service.getAllEmployees();
    // var employeesObservable = this.service.getAllEmployees();
    // employeesObservable.subscribe(employees => { this.employees = employees });
    // response.subscribe((data)=>this.message=data)
  }

}
