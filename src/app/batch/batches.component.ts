import { Component, OnInit } from '@angular/core';
import { BatchesService } from './batches.service';
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  providers:[
      BatchesService
  ]
})

export class BatchesComponent implements OnInit {
    // title = 'app';
    batchesList=[];
    id:number;
    constructor(private api: BatchesService,private route: ActivatedRoute,private router:Router ){ }

    addBatch(name,date){
        console.log(date)
        this.api.addBatch(name,this.id,date)
        .subscribe((event:any)=>{
          this.batchesList.push(event)
          console.log(this.batchesList);
          
        })
    }
    BatchClicked(id1)
    {
    this.router.navigate(['/lecture',id1]);
        
    }
    ngOnInit(){
        this.id = +this.route.snapshot.paramMap.get('id');
        this.api.getBatches(this.id)
        .subscribe((event:any)=>{
            this.batchesList = event;
        })
    }
 }