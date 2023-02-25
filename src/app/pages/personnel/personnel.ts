export class Personnel {
    id: number;
    firstName: string;
    lastName: string;
    jobTitle: string;
    department: string;
    accessLevel: number;
  
    constructor(id: number, firstName: string, lastName: string, jobTitle: string, department: string, accessLevel: number) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.jobTitle = jobTitle;
      this.department = department;
      this.accessLevel = accessLevel;
    }
  }
  