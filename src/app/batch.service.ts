import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BatchService {

  constructor(private http:HttpClient) { }
  getBatches(){
    return this.http.get('http://localhost:8000/batches');
  }
}
