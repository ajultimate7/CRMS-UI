import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  searchParams: any={
    firstName:'',
    lastName:'',
    status:'',
    id:0
  };

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData:any,
    private employeeService: EmployeeService
    ){ }

  ngOnInit(): void {
    console.log("Inside modal");
  }

  deactivateEmployee(){
    this.searchParams.status = 'Active';
    this.employeeService.deactivateEmployee(this.modalData.id).subscribe((data)=>this.employeeService.getAllEmployees(this.searchParams));
    this.employeeService.deactivateEmployee(this.modalData.id).subscribe((data)=>this.employeeService.getAllActiveEmployees());
    this.closeModal();
  }

  closeModal(){
    this.dialogRef.close();
  }

}
