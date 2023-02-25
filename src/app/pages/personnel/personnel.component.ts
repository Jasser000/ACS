import { Component, OnInit } from '@angular/core';
import { Personnel } from './personnel';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {

  public PERSONNEL_DATA: Personnel[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', jobTitle: 'Manager', department: 'Marketing', accessLevel: 2 },
    { id: 2, firstName: 'Jane', lastName: 'Doe', jobTitle: 'Assistant', department: 'Sales', accessLevel: 1 },
    { id: 3, firstName: 'Jim', lastName: 'Smith', jobTitle: 'Developer', department: 'IT', accessLevel: 3 },
    { id: 4, firstName: 'Sarah', lastName: 'Johnson', jobTitle: 'Administrator', department: 'Admin', accessLevel: 2 },
    { id: 5, firstName: 'Mike', lastName: 'Brown', jobTitle: 'Designer', department: 'Marketing', accessLevel: 1 },
    { id: 6, firstName: 'Tom', lastName: 'Williams', jobTitle: 'Engineer', department: 'Engineering', accessLevel: 3 },
    { id: 7, firstName: 'Jessica', lastName: 'Davis', jobTitle: 'Analyst', department: 'Finance', accessLevel: 2 },
    { id: 8, firstName: 'Alex', lastName: 'Johnson', jobTitle: 'Developer', department: 'IT', accessLevel: 3 },
    { id: 9, firstName: 'Amanda', lastName: 'Jones', jobTitle: 'Human Resources Manager', department: 'HR', accessLevel: 2 },
    { id: 10, firstName: 'Robert', lastName: 'Brown', jobTitle: 'Graphic Designer', department: 'Design', accessLevel: 1 }
  ];
  constructor() { }

  ngOnInit(): void {

  }
}
