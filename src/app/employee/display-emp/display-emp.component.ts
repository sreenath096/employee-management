import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-display-emp',
  templateUrl: './display-emp.component.html',
  styleUrl: './display-emp.component.css'
})
export class DisplayEmpComponent {
  @Input() employee: Employee | undefined;
}
