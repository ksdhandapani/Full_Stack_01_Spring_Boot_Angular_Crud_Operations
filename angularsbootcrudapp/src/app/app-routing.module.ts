import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './component/employee-create/employee-create.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './component/employee-update/employee-update.component';


const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees/new', component: EmployeeCreateComponent},
  { path: 'employees/update/:id', component: EmployeeUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
