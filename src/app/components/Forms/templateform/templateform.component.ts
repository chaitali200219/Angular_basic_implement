import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.css'
})
export class TemplateformComponent {

  student:any={
    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zipCode:'',
    isacceptTerms:false,
  }

  formvalue:any;

  onSubmit(){
    debugger;
    this.formvalue=this.student;

  }
  resetform(){
    this.student=
    {
      firstName:'',
      lastName:'',
      userName:'',
      city:'',
      state:'',
      zipCode:'',
      isacceptTerms:false,
    }
  }

}
