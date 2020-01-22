import { Component, OnInit } from "@angular/core";
import { IEmp } from "../iemp";
import { EmpDataServiceService } from '../emp-data-service.service';

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
 // providers:[EmpDataServiceService]
})
export class EmployeeComponent implements OnInit {
  
  empList:IEmp[];
 
  constructor(private empService:EmpDataServiceService ) {
    
  }

  ngOnInit(){
    this.empService.getFromSpringBootClient().subscribe(
      employeeData=>this.empList=employeeData)
    this.empList=this.empService.getEmpList();
  }
}
