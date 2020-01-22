import { Injectable } from '@angular/core';
import { IEmp } from './iemp';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDataServiceService {

  getEmpList():IEmp[]{
    return this.empList;
  }

  empList:IEmp[]=[
    { code : 'emp01',
     name : 'Kazim',
     gender : 'male',
     annualSalary :7000000,
     dateOfBirth :"10/28/1992"
   },
   { code : 'emp02',
     name : 'Swapnil',
     gender : 'male',
     annualSalary :1200000,
     dateOfBirth :"07/07/1947"
   },
   { code : 'emp03',
     name : 'Pandu',
     gender : 'male',
     annualSalary :7000000,
     dateOfBirth :"04/15/1692"
   },
   ]
 
  constructor(private http:HttpClient) { }

  getFromSpringBootClient(): Observable <IEmp[]> {
    let httpOptions={
      headers:new HttpHeaders(
        {
          'Access-Control-Allow-Origin' : 'http://localhost:4200'
        }
      )

    };
    return this.http.get<IEmp[]>('localhost:3000/routes/employee/list',httpOptions)
  }




}
