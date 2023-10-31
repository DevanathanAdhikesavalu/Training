import { Component } from '@angular/core';
import { FormGroup  } from '@angular/forms';
import { FormControl  } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  userList:any=[];
  addUser(uData:any){
    console.log(uData);
    console.log(uData.value);
    this.userList.push(uData.value);
  } 
  // userForm : any = new FormGroup({
  //   firstName: new FormControl
  //   ('unknown',[Validators.minLength(5)],Validators.maxLength(12)]),
  //   lastName: new FormControl
  //   ('unknown',[Validators.minLength(5)],Validators.maxLength(12)]),
  //   salary : new FormControl
  //   ('300000',[Validators.min(300000)],Validators.max(1000000),Validators.required])
  // })
}
