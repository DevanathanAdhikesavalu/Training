import { Component } from '@angular/core';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { UserData } from './UserData'; // Adjust the import path to match your project structure

@Component({
  selector: 'app-root',
  template: `
    <h2>Parent Component</h2>
    <app-structural-directives [inputProperty]="parentData"></app-structural-directives>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // uData : UserData = new UserData();
  // userList : UserData[]=[];
  // title = 'bindings';
  // themeName:string='ocean';
  // color:string='red';
  // size:number=100;
  // firstName:string='Devanathan';
  // lastName:string='Adhikesavalu';
  // enableDisable:boolean=false;
  // state:string='tn';
  // city:string='chennai';
  // saveData(){
  //   this.userList.push(this.uData);
    
  //   console.log('Added data to the array');
  //   console.log(this.userList);
  //   this.uData=new UserData();
  // }  checkData(){
  //   console.log(this.firstName.length);
  // }
  // sendData(){
  //   console.log("Send data to the backend");
  // }
  parentData: string = 'Hello from Parent';
}
