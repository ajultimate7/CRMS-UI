import { Component, OnInit } from '@angular/core';
import { EmployeeDTO } from '../../employeeDTO.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { EmployeeInDTO } from '../../employeeInDTO.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employeeInDTO: EmployeeInDTO;
  employeeDTO: EmployeeDTO;
  id: number;
  submitted = false;
  message: any;
  employeeFormGroup: FormGroup;

  showAddEmployee = false;

  createFormGroup(){
    this.employeeFormGroup = new FormGroup({
      firstName: new FormControl(this.employeeInDTO.firstName,[Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      lastName: new FormControl(this.employeeInDTO.lastName, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      contactNo: new FormControl(this.employeeInDTO.contactNo, [Validators.required, Validators.min(1000000000), Validators.max(9999999999), Validators.pattern("^[1-9][0-9]*")]),
      username: new FormControl(this.employeeDTO.username),
      emailId: new FormControl(this.employeeDTO.emailId),
      id: new FormControl(this.employeeDTO.id),
      status: new FormControl(this.employeeDTO.status)
    })  
  }

  get firstName() { return this.employeeFormGroup.get('firstName'); }
  get lastName() { return this.employeeFormGroup.get('lastName'); }
  get contactNo() { return this.employeeFormGroup.get('contactNo'); }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: EmployeeService
  ) { }

  ngOnInit(){
    this.employeeDTO = new EmployeeDTO();
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if(this.id != -1){
      let response = this.service.getEmployeeById(this.id);
      response.subscribe((data)=>{
      this.employeeInDTO=data;
      this.createFormGroup();
      this.employeeDTO=data;
    });
    }
    else{
      this.showAddEmployee=true;
      this.employeeInDTO = new EmployeeInDTO();
      this.createFormGroup();
    }
  }

  updateEmployee(){
    let response = this.service.updateEmployee(this.id,this.employeeInDTO);
    response.subscribe((data)=>console.log(data));
    this.employeeDTO = new EmployeeDTO();
  }

  addEmployee(){
    let response = this.service.addEmployee(this.employeeInDTO);
    response.subscribe((data)=>this.message=data)
    this.employeeDTO = new EmployeeDTO();
    this.goToEmployeeList();
  }

  onSubmit(){
    this.submitted=true;
    if(this.id != -1)
      this.updateEmployee();
    else 
      this.addEmployee();
  }

  goToEmployeeList(){
    this.router.navigate(['employees']);
  }

}