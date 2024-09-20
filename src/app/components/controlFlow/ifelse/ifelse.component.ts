import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
  div1Visible:boolean=true;
  div2Visible:boolean=true;
  isWarningDivVisible:boolean=false;
  num1:string='';
  num2:string='';
  selectedStatus:string='';


  showDiv(){
    this.div1Visible=false;
  }
  hideDiv(){
    this.div1Visible=true;

  }
  toggleDive2(){
    this.isWarningDivVisible=!this.isWarningDivVisible;
  }

}
