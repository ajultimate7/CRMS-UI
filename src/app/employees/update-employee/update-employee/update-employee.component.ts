import { Component, OnInit } from '@angular/core';
import { EmployeeDTO } from '../../employeeDTO.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { EmployeeInDTO } from '../../employeeInDTO.model';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: EmployeeDTO;
  id: number;
  submitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: EmployeeService
  ) { }

  ngOnInit(){
    this.employee = new EmployeeDTO();
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    let response = this.service.getEmployeeById(this.id);
    response.subscribe((data)=>this.employee=data);
    console.log(this.employee);
    console.log('get by id called');
  }

  updateEmployee(){
    let response = this.service.updateEmployee(this.id,this.employee);
    response.subscribe((data)=>console.log(data));
    this.employee = new EmployeeDTO();
    this.goToEmployeeList();
  }

  onSubmit(){
    this.submitted=true;
    this.updateEmployee();
  }

  goToEmployeeList(){
    this.router.navigate(['employees']);
  }

}
