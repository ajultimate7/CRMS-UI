import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeInDTO } from './employees/employeeInDTO.model';
import { Observable } from 'rxjs';
import {HttpParams} from '@angular/common/http';
import { EmployeeDTO } from './employees/employeeDTO.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  private baseURL = 'http://localhost:8080/api/employee/';

  public addEmployee(employee: EmployeeInDTO){
    return this.http.post('http://localhost:8080/api/employee/',employee);
  }

  public getAllEmployees(): Observable<any>{
    return this.http.get('http://localhost:8080/api/employee/all');
  }

  public updateEmployee(id:number, employee: EmployeeInDTO){
    return this.http.put(`http://localhost:8080/api/employee/${id}`,employee);
  }

  public deactivateEmployee(id:number){
    console.log(id);
    return this.http.patch('http://localhost:8080/api/employee/',id);
  }

  public getEmployeeById(id:number): Observable<any>{
    return this.http.get(`http://localhost:8080/api/employee/id/${id}`);
  }

}
