import { Component } from '@angular/core';
import { FormGroup  } from '@angular/forms';
import { FormControl  } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent {
  title = 'forms';
  userList:any=[];
  addUser(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.userList.push(this.userForm.value)
    }
    else{
      console.log('validation error');
    }
  } 
  userForm : any = new FormGroup({
    firstName: new FormControl
    ('unknown',[Validators.minLength(5),Validators.maxLength(12),Validators.required]),
    lastName: new FormControl
    ('unknown',[Validators.minLength(5),Validators.maxLength(12),Validators.required]),
    salary : new FormControl
    (300000,[Validators.min(300000),Validators.max(1000000),Validators.required])
  },
  {
    updateOn:'change'
  }
  )
}
/*
Component Life Cyle 
-------------------------
Initialization phase     1.ngOnInit   2.AfterContentInit  
Activation phase         1.AfterViewInit  2.AfterViewChecked
View or display phase  
Validation phase         1.ngDoCheck 2.AfterContentChecked
Updation phase           1.onUpdate
Destroy phase            1.onDestroy

*/