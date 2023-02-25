import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public expandedAccordionId!: string;
  public menuProperties: Array<Menu> = [
    {
      id: '1',
      title: 'Dashboard',
      icon: '',
      url: '',
    },
    {
      id: '2',
      title: 'Users',
      icon: '',
      url: '',
      subMenu: [
        {
          id: '21',
          title: 'Manage Users',
          icon: '',
          url: '',
        },
        {
          id: '22',
          title: 'User Permissions',
          icon: '',
          url: '',
        },
        {
          id: '23',
          title: 'User Access History',
          icon: '',
          url: '',
        },
      ]
    },
    {
      id: '3',
      title: 'Access Control',
      icon: '',
      url: '',
      subMenu: [
        {
          id: '31',
          title: 'Manage Access Points',
          icon: '',
          url: '',
        },
        {
          id: '32',
          title: 'Manage Access Cards',
          icon: '',
          url: '',
        },
        {
          id: '33',
          title: 'Manage Access Schedules',
          icon: '',
          url: '',
        },
        {
          id: '34',
          title: 'Manage Access Logs',
          icon: '',
          url: '',
        },
      ]
    },
    {
      id: '4',
      title: 'Settings',
      icon: '',
      url: '',
      subMenu: [
        {
          id: '41',
          title: 'System Settings',
          icon: '',
          url: '',
        },
        {
          id: '42',
          title: 'User Settings',
          icon: '',
          url: '',
        },
        {
          id: '43',
          title: 'Security Settings',
          icon: '',
          url: '',
        },
        {
          id: '44',
          title: 'Backup and Restore',
          icon: '',
          url: '',
        },
      ]
    },
  ]
  toggleAccordion(id: string) {
    if (this.expandedAccordionId === id) {
      this.expandedAccordionId = '';
    } else {
      this.expandedAccordionId = id;
    }
  }
  constructor() { }

  ngOnInit(): void {

  }


}


