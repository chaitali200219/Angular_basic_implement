import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isDiv1Visible:boolean=true;
  isDiv2Visible:boolean=true;
  num1:string="";
  num2:string="";

  isActive:boolean=false;
  

  selectedState:string="";


  cityArray:string[]=['pune','nagpur','mumbai','shimla']

  studentList:any[]=[
    {name:'AAA',city:'Pune',isActive:false},
    {name:'AbA',city:'Thane',isActive:true},
    {name:'AcA',city:'nagpur',isActive:false},
    {name:'AdA',city:'Mumbai',isActive:true},
    {name:'AeA',city:'nashik',isActive:false},
    {name:'ArA',city:'jalgoa',isActive:false},
  ]

  showDiv1(){
    this.isDiv1Visible=true;
  }
  hideDiv1(){
    this.isDiv1Visible=false;
  }
  toogleDiv2(){
    this.isDiv2Visible=!this.isDiv2Visible;
  }

}
