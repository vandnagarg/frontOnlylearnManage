import { Component, OnInit } from '@angular/core';
import { SubjectsService } from './subjects.service';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
  providers:[
    SubjectsService,
    CourseService
  ]
})
export class SubjectsComponent implements OnInit {

  subjectsList;
  selectedId;
  courses=[];
  constructor(private api:SubjectsService,private apiCourse : CourseService) {
    this.subjectsList = [];
   }
   addSubject(name){
    this.api.addSubject(name,this.selectedId)
    .subscribe((event:any)=>{
        // console.log(this.coursesList);
         this.subjectsList.push(event);
    })
   
   }
  ngOnInit() {
    this.api.getSubjects()
    .subscribe((event:any)=>{
        // console.log(this.coursesList);
         this.subjectsList = event;
    })
    this.apiCourse.getCourses()
    .subscribe((event:any)=>{
      this.courses  = event
    })
  }
}
