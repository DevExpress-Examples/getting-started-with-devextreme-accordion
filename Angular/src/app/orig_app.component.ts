import { Component } from '@angular/core';
import { Employee, Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service],
})

export class AppComponent {
  employees: Employee[];
  constructor(private service: Service) {
    this.employees = service.getEmployees();
  }
}
