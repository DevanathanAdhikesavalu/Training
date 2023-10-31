import { Component } from '@angular/core';
import { OnDestroy,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit ,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit ,OnInit{
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngDoCheck(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    //write the code for connecting to the backend to save the data
    //before component getting destroyed
    console.log('Component got destroyed at' +new Date());
  }
  ngOnInit(): void {
    //write the code for connecting to backend and fetch data 
    console.log('Component getting initialized');
  }
  title = 'componentlifecycle';
  sellingPrice = 15.39;
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