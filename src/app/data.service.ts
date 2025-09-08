import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private msg=new BehaviorSubject<string>("Some Default Message");
  currentMsg=this.msg;
changeMessage(message:string)
{
  this.msg.next(message);
}

}
