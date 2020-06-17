import { Component, OnInit } from '@angular/core';
import { EmployeeInDTO } from '../../employeeInDTO.model';
import { AddEmployeeService } from 'src/app/add-employee.service';
import { EmployeeDTO } from '../../employeeDTO.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: EmployeeInDTO = new EmployeeInDTO("","",0);
  message: any;

  constructor(private service: AddEmployeeService) { }

  ngOnInit(): void {
  }

  public addEmployee(){
    console.log(this.employee);
    let response = this.service.addEmployee(this.employee);
    response.subscribe((data)=>this.message=data)
  }

}
