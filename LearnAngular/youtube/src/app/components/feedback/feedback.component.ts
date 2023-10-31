import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  emailAddress:string='';
  phoneNumber:string='';
  rate:number=2;
  feedbackTitle:string='';
  feedback:string='';
  uData:any;
  submitFeedback(uData:any){

  }
}
