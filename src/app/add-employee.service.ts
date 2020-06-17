import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeInDTO } from './employees/employeeInDTO.model';
import { Observable } from 'rxjs';
import { EmployeeDTO } from './employees/employeeDTO.model';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  constructor(private http: HttpClient) {}

  public addEmployee(employee: EmployeeInDTO){
    return this.http.post("http://localhost:8080/api/employee/",employee,{responseType:'text' as 'json'});
  }

  public getAllEmployees(){
    // return this.http.get("https://localhost:8080/api/employee/");
    // return Observable.create(observer => {
    //   this.http.get("https://localhost:8080/api/employee/").map(response => response.json().data as EmployeeDTO);
    // })
    return this.http.get("http://localhost:8080/api/employee/");
  }

  public deleteEmployee(){
    this.http.delete("http://localhost:8080/api/employee/");
  }

}
