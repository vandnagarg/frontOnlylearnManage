import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import { BatchService } from '../batch.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers:[
    StudentsService,
    BatchService
  ]
})
export class StudentsComponent implements OnInit {
  studentsList;
  selectedId;
  batches=[];
  constructor(private api:StudentsService,private apiBatch:BatchService,private router:Router) {
    this.studentsList = [];
   }
   addStudent(name){
    this.api.addStudent(name,this.selectedId)
    .subscribe((event:any)=>{
        // console.log(this.coursesList);
        this.api.getStudents()
         .subscribe((event:any)=>{
        // console.log(this.coursesList);
         this.studentsList = event;
    })
        
    })
   
   }
  ngOnInit() {
    this.api.getStudents()
    .subscribe((event:any)=>{
        // console.log(this.coursesList);
         this.studentsList = event;
    })
    this.apiBatch.getBatches()
    .subscribe((event:any)=>{
      this.batches  = event
    })
  }
  studentDetail(id){
    this.router.navigate(['/student',id]);
  }
}
