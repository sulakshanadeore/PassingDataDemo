import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
sermsg?:string|null=null;

loginForm=new FormGroup({
username:new FormControl('',[Validators.required]),
password:new FormControl('',[Validators.required])

});
  constructor(private router:Router)
  {
  }
  get username()
  {
return this.loginForm.get('username');
  }
  get password()
  {
return this.loginForm.get('password');
  }

  gotoPage2()
  {
    let username=this.loginForm.value.username;
let pwd=this.loginForm.value.password;
if(username=='Ankita' && pwd=="123")
{
  localStorage.setItem('usernameLoggedIn',username);
this.router.navigate(['/page2',username]);
}
else
  alert("Check credentials");

  }

}
