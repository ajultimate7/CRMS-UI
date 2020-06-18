import { Component, OnInit } from '@angular/core';
import { EmployeeInDTO } from '../../employeeInDTO.model';
import { EmployeeService } from 'src/app/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employees: EmployeeInDTO = new EmployeeInDTO();
  submitted = false;
  message:any;

  constructor(
    private service: EmployeeService,
    private route:ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    // this.addEmployee();
  }

  public addEmployee(){
    console.log(this.employees);
    let response = this.service.addEmployee(this.employees);
    response.subscribe((data)=>this.message=data)
    this.employees = new EmployeeInDTO();
    this.goToList();
  }

  onSubmit(){
    this.submitted=true;
    this.addEmployee();
  }

  goToList(){
    this.router.navigate(['/employees']);
  }

}
