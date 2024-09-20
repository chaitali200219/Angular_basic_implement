import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  div1BgColor:string='bg-primary';
  isdiv2Active:boolean=true;
  num1:string="";
  num2:string="";
  isActive:boolean=false;

  customerStyle:any={
    'color':'white',
    'background-color':'red',
    'width':'200px',
    'height':'200px',
    'border-radius':"50%", 

  }

  studentList:any[]=[
    {studId:12,totalMarks:28 ,gender:'male',name:'AAA',city:'Pune',isActive:false},
    {studId:14,totalMarks:58 ,gender:'female',name:'AbA',city:'Thane',isActive:true},
    {studId:18,totalMarks:78 ,gender:'male',name:'AcA',city:'nagpur',isActive:false},
    {studId:82,totalMarks:68 ,gender:'male',name:'AdA',city:'Mumbai',isActive:true},
    {studId:52,totalMarks:88 ,gender:'female',name:'AeA',city:'nashik',isActive:false},
    {studId:52,totalMarks:68 ,gender:'male',name:'ArA',city:'jalgoa',isActive:false},
  ]

  addRedClass(){
    this.div1BgColor="bg-danger"
  }
  addBlueClass(){
    this.div1BgColor="bg-primary"
  }
  isToggleDiv2(){
    this.isdiv2Active=!this.isdiv2Active;
  }

}
