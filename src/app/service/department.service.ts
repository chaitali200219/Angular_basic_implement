import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }
  getAllDept(){
     return this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment")
  }
}
