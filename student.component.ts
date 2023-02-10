import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
 showadd!:boolean;
 showupdate!:boolean;

 formvalue!:FormGroup
 constructor(private formBuldier:FormBuilder){}
 

 ngOnInit():void{
  this.formvalue=this.formBuldier.group({
    name:['',Validators.required],
    email:['',Validators.required],
    mobile:['',Validators.required],
    city:['',Validators.required],

  })
 }



  add(){
    this.showadd=true;
    this.showupdate=false;

  }
  update(){
this.showadd=false;
this.showupdate=true;
  }

}
