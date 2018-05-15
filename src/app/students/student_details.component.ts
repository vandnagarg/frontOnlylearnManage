import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { StudentsService } from './students.service';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './student_details.component.html',
  providers:[
    StudentsService,
    BatchService
  ]
})
export class StudentDetailsComponent implements OnInit{
  title = 'app';
  id:number;
  student='';
  batches;
  selectedId;
  constructor(private apiStud:StudentsService,private apiBatch:BatchService, private route: ActivatedRoute,private router:Router ){ }
  enroll(){
    this.apiStud.enroll(this.id,this.selectedId)
    .subscribe(event=>{
        this.apiStud.getStudent(this.id)
        .subscribe((event:any)=>{
            this.student = event;
            console.log(this.student)
            
        })
    })
  }
  ngOnInit(){
        this.id = +this.route.snapshot.paramMap.get('id');
        this.apiStud.getStudent(this.id)
        .subscribe((event:any)=>{
            this.student = event;
            console.log(this.student)
            
        })
        this.apiBatch.getBatches()
        .subscribe((event:any)=>{
            this.batches = event;

            
        })
    }
}
