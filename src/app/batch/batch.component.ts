import { Component, OnInit } from '@angular/core';
import { BatchService } from './../batch.service';
import { BatchesService } from './batches.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css'],
  providers:[
    BatchesService,
    BatchService
  ]
})

export class BatchListComponent implements OnInit {
    // title = 'app';
    batchesList=[];
    batchesUpcoming=[];
    
    constructor(private api: BatchService,private router:Router) {
      this.batchesList = [];
    }
    BatchClicked(id1)
    {
    this.router.navigate(['/lecture',id1]);
        
    }
    ngOnInit(){
      this.api.getBatches()
        .subscribe((event: any) => {
           console.log(this.batchesList);
           this.batchesList = event;
           console.log(this.batchesList);
           var today:any = new Date();
           var dd:any = today.getDate();
           var mm:any = today.getMonth()+1; //January is 0!
           var yyyy:any = today.getFullYear();
       
           if(dd<10) {
               dd = '0'+dd
           } 
           
           if(mm<10) {
               mm = '0'+mm
           } 
           
           today = yyyy + '-' + mm + '-' + dd;
           var item:number = 0;
           this.batchesList.forEach((batch,index,array)=>{
             item++;
             if(batch.startDate >= today){
               this.batchesUpcoming.push(batch);
             }
             if(item === array.length){
               console.log(this.batchesUpcoming + "batches ")
       
             }
           })
           
        });
        // this.UpcomingBatches();
    }
  }
  