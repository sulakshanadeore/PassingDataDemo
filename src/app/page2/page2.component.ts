import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
username:string|null=null;

constructor(private router:Router,
  private route:ActivatedRoute,
  private dataser:DataService)
{
this.route.paramMap.subscribe(params=>
{
  this.username=params.get('username');
});
  
}
gotoPage3()
{
  this.dataser.changeMessage("Hello from page2 using the service");
  this.router.navigate(['/page3'],{queryParams:{ref:'page2',status:'active',myval:'1000'}});
}

}
