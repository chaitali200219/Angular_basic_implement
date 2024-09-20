import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  //string,no,boolean,date
  courseName:string="AnGULAR 18";
  inputType="checkbox";
  myClassName:string="bg-primary"
  Rollno:number=123;
  isIndian:boolean=false;
  currentDate:Date=new Date();
  stateName:string="Maharashtra"
  firstName=signal("chaitali shrama")

  constructor(){
    this.courseName
  }

  changeCourseName(){
    this.courseName="react js"
    this.firstName.set("chaitali sule")
  }

  showAlert(message:string){
    alert(message)

  }

}
