import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CourseService {

  constructor(private http:HttpClient) { }
  getCourses(){
    return this.http.get('http://localhost:8000/courses');
  }

  addCourse(name){
    console.log(name + "dfdf")
    return this.http.post('http://localhost:8000/courses',{name});
  }
}
