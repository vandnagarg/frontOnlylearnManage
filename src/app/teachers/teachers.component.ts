import { Component, OnInit } from '@angular/core';
import { TeachersService } from './teachers.service';
import { SubjectsService } from '../subjects/subjects.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
  providers:[
    TeachersService,
    SubjectsService
  ]
})
export class TeachersComponent implements OnInit {

  teacherList;
  subjects=[];
  selectedId;
  constructor(private api:TeachersService,private apiSub:SubjectsService) {
    this.teacherList = [];
   }
   addTeacher(name){
     console.log(this.selectedId)
    this.api.addTeacher(name,this.selectedId)
    .subscribe((event:any)=>{
        // console.log(this.coursesList);
         this.teacherList.push(event);
         console.log('teachers'  + this.teacherList)
    })
   }
  ngOnInit() {
    this.api.getTeachers()
    .subscribe((event:any)=>{
        // console.log(this.coursesList);
         this.teacherList = event;
    })
    this.apiSub.getSubjects()
    .subscribe((event:any)=>{
      this.subjects  = event
    })
  }


}
