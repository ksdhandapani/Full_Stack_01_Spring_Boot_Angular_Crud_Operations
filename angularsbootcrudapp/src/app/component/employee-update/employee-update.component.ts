import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getEmployeeById(this.id);
  }

  private getEmployeeById(id: number) {
    this.employeeService.getEmployeeById(id).subscribe(data => {
      this.employee = data;
    }, error => {
      console.log(error);
    });
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeesList();
    }, error => {
      console.log(error);
    });
  }

  goToEmployeesList(){
    this.router.navigate(['/employees']);
  }

}
