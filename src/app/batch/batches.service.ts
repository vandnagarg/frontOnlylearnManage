import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BatchesService {

  constructor(private http:HttpClient) { }
  getBatches(id){
    return this.http.get('http://localhost:8000/courses/' + (id) + '/batches');
  }
  addBatch(name,id,date){
    console.log(date)
    return this.http.post('http://localhost:8000/courses/' + (id) + '/batches',{name,date});
    
  }
  
}
