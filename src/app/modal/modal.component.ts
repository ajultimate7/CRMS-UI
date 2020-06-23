import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData:any,
    private employeeService: EmployeeService
    ){ }

  ngOnInit(): void {
  }

  deactivateEmployee(){
    this.employeeService.deactivateEmployee(this.modalData.id).subscribe((data)=>this.employeeService.getAllEmployees());
    this.closeModal();
  }

  closeModal(){
    this.dialogRef.close();
  }

}
