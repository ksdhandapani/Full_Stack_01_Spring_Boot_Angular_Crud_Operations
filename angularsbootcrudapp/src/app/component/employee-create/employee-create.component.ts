import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.saveEmployee(this.employee);
  }

  goToEmployeesList(){
    this.router.navigate(['/employees']);
  }

  saveEmployee(employee: Employee){
    this.employeeService.createEmployee(employee).subscribe(data => {
      console.log(data);
      this.goToEmployeesList();
    },error => {
      console.log(error);
    });
  }


}
