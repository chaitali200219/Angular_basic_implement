import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';


@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

  deptObj:any={
    "departmentId":0,
    "departmentName":"",
    "departmentLogo":"",
  }
  deptList:any[]=[] 

  http=inject(HttpClient)

  constructor(private deptSrv:DepartmentService){

  }
  ngOnInit(): void {
      this.getDepartment();
  }

  onSave(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptObj).subscribe((res:any)=>{
      if(res.result){
        alert("Departement created Successfully")
        this.getDepartment();
      }
      else{
        alert(res.message)
      }

    })

  }
  onUpdate(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",this.deptObj).subscribe((res:any)=>{
      if(res.result){
        alert("Departement updated Successfully")
        this.getDepartment();
      }
      else{
        alert(res.message)
      }

    })

  }
  onDelete(id: number) {
    this.http.delete(`https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId/${id}`)
      .subscribe({
        next: (res: any) => {
          if (res.result) {
            alert("Department deleted successfully");
            this.getDepartment(); // Refresh the department list
          } else {
            alert(res.message);
          }
        },
        error: (err) => {
          console.error('Delete error', err);
          alert('An error occurred while deleting the department');
        }
      });
  }

  // getDepartment(){
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
  //     this.deptList=res.data;

  //   })
  // }

  getDepartment(){
    this.deptSrv.getAllDept().subscribe((res:any)=>{
      this.deptList=res.data;
    })
  }

  onEdit(data:any){
    this.deptObj=data;

  }

}
