import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SubjectsService {

  constructor(private http:HttpClient) { }
  getSubjects(){
    return this.http.get('http://localhost:8000/subjects');
  }

  addSubject(name,id){
    console.log(name + "dfdf" + "id " + id)
    return this.http.post('http://localhost:8000/subjects',{id,name});
  }
}
