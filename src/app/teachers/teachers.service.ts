import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TeachersService {

  constructor(private http:HttpClient) { }
  getTeachers(){
    return this.http.get('http://localhost:8000/teachers');
  }

  addTeacher(name,id){
    return this.http.post('http://localhost:8000/teachers',{id,name});
  }
}
