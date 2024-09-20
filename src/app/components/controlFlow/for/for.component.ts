import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  
  cityArray:string[]=['pune','nagpur','mumbai','shimla']

  studentList:any[]=[
    {name:'AAA',city:'Pune',isActive:false},
    {name:'AbA',city:'Thane',isActive:true},
    {name:'AcA',city:'nagpur',isActive:false},
    {name:'AdA',city:'Mumbai',isActive:true},
    {name:'AeA',city:'nashik',isActive:false},
    {name:'ArA',city:'jalgoa',isActive:false},
  ]

}
