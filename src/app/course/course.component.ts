import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from './course.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers:[
    CourseService
  ]
})
export class CourseComponent implements OnInit {
  coursesList;
  courseSelectedId:number;
  constructor(private api:CourseService,private router:Router) {
    this.coursesList = [];
   }
   CourseClicked(id:number){
     this.courseSelectedId = id;
    this.router.navigate(['/batches',id]);
   }
  ngOnInit() {
    this.api.getCourses()
    .subscribe((event:any)=>{
        // console.log(this.coursesList);
         this.coursesList = event;
    })
  }


  addCourse(name){
    
      this.api.addCourse(name)
      .subscribe((event:any)=>{
        this.coursesList.push(event)
        console.log(this.coursesList);
        
      })
  
    
  
  }
}
