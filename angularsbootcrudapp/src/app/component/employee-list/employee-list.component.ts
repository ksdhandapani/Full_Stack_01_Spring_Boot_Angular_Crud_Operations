import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployeesList();
  }

  updateEmployee(id: number){
    this.router.navigate(['/employees/update',id])
  }

  private getEmployeesList() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    },error => {
      console.log(error);
    });
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployeeById(id).subscribe(data => {
     console.log(data);
     this.getEmployeesList();
    },error => {
      console.log(error);
    });
  }
}
