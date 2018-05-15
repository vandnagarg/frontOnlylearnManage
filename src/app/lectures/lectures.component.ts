import { Component, OnInit } from '@angular/core';
import { LectureService } from './lecture.service';
import {ActivatedRoute,Router} from '@angular/router'
import { BatchService } from '../batch.service';
import { TeachersService } from '../teachers/teachers.service';
import { SubjectsService } from '../subjects/subjects.service';
import { StudentsService } from '../students/students.service';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css'],
  providers:[
    LectureService,
    TeachersService,
    SubjectsService,
    StudentsService
  ]
})
export class LecturesComponent implements OnInit {
  id:number;
  selectedId1;
  selectedId2;
  subjects=[];
  lectures = [];
  teachers=[];
  students=[];
  constructor(private apiTeac: TeachersService,private apiStud: StudentsService, private apiBatch:SubjectsService,private api: LectureService,private route: ActivatedRoute,private router:Router ){ }
  
  addLecture(name){
    this.api.addLecture(this.id,this.selectedId1,this.selectedId2,name)
    .subscribe((event:any)=>{
      this.lectures.push(event)
    })
  }
  addStudent(name){
    this.apiStud.addStudent(name,this.id)
    .subscribe((event:any)=>{
      this.apiStud.getStudentByBatch(this.id)
         .subscribe((event:any)=>{
        // console.log(this.coursesList);
         this.students = event;
    })
  })
}
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
        this.api.getLectures(this.id)
        .subscribe((event:any)=>{
            this.lectures = event;
        })
        this.apiStud.getStudentByBatch(this.id)
        .subscribe((event:any)=>{
            this.students = event;
        })
        this.apiBatch.getSubjects()
        .subscribe((event:any)=>{
          this.subjects  = event
        })
        this.apiTeac.getTeachers()
        .subscribe((event:any)=>{
          this.teachers  = event
        })
  }

}
