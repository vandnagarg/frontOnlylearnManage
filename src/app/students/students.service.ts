import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StudentsService {

  constructor(private http:HttpClient) {}
  getStudents(){
    return this.http.get('http://localhost:8000/students');
  }
  getStudentByBatch(id){
    return this.http.get('http://localhost:8000/courses/'+(id) + '/batches/' +(id)+'/students');
    
  }
  enroll(id,bid){
    return this.http.post('http://localhost:8000/students/'+ (id) ,bid)
  }
  getStudent(id){
    return this.http.get('http://localhost:8000/students/'+ (id) )
  }
  addStudent(name,batches){
    return this.http.post('http://localhost:8000/students',{name,batches});
  }
}
