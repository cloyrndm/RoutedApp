import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  shStudentCollection: Array<object> = [];
  studObj: {studNum: number, firstName: string, lastName: string, prog: string, year:number};

  constructor() { }

  addNewStud(shNumber: number, shFirstName: string, shLastName: string, shProg: string, shYear:number){
    this.studObj = {
      studNum: shNumber,
      firstName: shFirstName,
      lastName: shLastName,
      prog: shProg,
      year: shYear
    }
    this.shStudentCollection.push(this.studObj);
  }

  getStud(){
    return this.shStudentCollection;
  }

}
