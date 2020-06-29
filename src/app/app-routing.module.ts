import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employees/update-employee/update-employee/update-employee.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'main', component:AppComponent, pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
