import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {

  studentform:FormGroup=new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName:new FormControl(''),
    userName:new FormControl('mar@123',[Validators.email]),
    city:new FormControl(''),
    state:new FormControl(''),
    zipcode:new FormControl(''),
    isAcceptTerms:new FormControl(''),


  })
  formvalue:any;
  onSave(){
    const formvalue=this.studentform.value
  }

  

}
