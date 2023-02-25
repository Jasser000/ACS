import { Component, OnInit } from '@angular/core';
import { AccessLog } from './accessLog';

@Component({
  selector: 'app-access-log',
  templateUrl: './access-log.component.html',
  styleUrls: ['./access-log.component.css']
})
export class AccessLogComponent implements OnInit{
  public accessLogs: AccessLog[]=[
    { timestamp: new Date('2022-01-01 10:00:00'), firstName: 'John', lastName: 'Doe', accessLevel: 2, department: 'Marketing', actionPerformed: 'Login' },
  { timestamp: new Date('2022-01-01 10:30:00'),firstName: 'Mike', lastName: 'Brown', accessLevel: 2, department: 'Marketing', actionPerformed: 'Create a new campaign' },
  { timestamp: new Date('2022-01-01 11:00:00'), firstName: 'Tom', lastName: 'Williams', accessLevel: 1, department: 'Sales', actionPerformed: 'Login' },

  ]
  constructor() { }

  ngOnInit(): void {
    this.accessLogs.forEach(log => {
      log.timestamp = new Date(log.timestamp);
    });
  }
}
