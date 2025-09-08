import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {
ref:string|null=null;
status?:string|null=null;
messageHere:string="";
valueRecd?:string|null=null;
constructor(private route:ActivatedRoute, private DataSer:DataService)
{
  this.route.queryParamMap.subscribe(params=>{
    this.ref=params.get('ref'),
    this.status=params.get('status'),
this.valueRecd=params.get('myval');
  });
  this.DataSer.currentMsg.subscribe(m1=>this.messageHere=m1);
}

}
