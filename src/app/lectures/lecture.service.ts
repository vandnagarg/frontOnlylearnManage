import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LectureService {

  constructor(private http:HttpClient) { }
  getLectures(id){
    return this.http.get('http://localhost:8000/courses/' + (id) + '/batches/' + (id) + '/lectures');
  }

  addLecture(bid,sid,tid,name){
    return this.http.post('http://localhost:8000/courses/'+(bid) +'/batches/'+(bid)+'/lectures',{sid,tid,name} );
  }
}
