import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
sermsg?:string|null=null;
  constructor(private router:Router)
  {

  }

  gotoPage2()
  {
const username="Rajesh";

this.router.navigate(['/page2',username]);

  }

}
