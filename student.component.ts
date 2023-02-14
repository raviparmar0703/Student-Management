import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {studentdata} from './student.model'
import { ApiService } from '../sherd/api.service';
import {HttpClient} from '@angular/common/http';




@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
 showadd!:boolean;
 showupdate!:boolean;
 studentmodelobj:studentdata=new studentdata

 formvalue!:FormGroup
 constructor(private formBuldier:FormBuilder,private api:ApiService){}
 

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
  addstudent(){
    const myObserver = {
      res: (res: number) => {
        return console.log('Observer got a next value: ');
      },
      error: (err:any ) => console.error('Observer got an error: '),
      
    };
    this.studentmodelobj.name=this.formvalue.value.name;
   this.studentmodelobj.email=this.formvalue.value.email;
   this.studentmodelobj.mobile=this.formvalue.value.mobile;
   this.studentmodelobj.city=this.formvalue.value.city;

   this.api.poststudent(this.studentmodelobj).subscribe(
     res=>{
     console.log(res)
     this.formvalue.reset()

     alert("recoard add sucessfuly");
   },
  err=>{
  alert("something went rong");
}
myObserver
)
 }

}
