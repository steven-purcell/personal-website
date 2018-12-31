import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hey you guys!';
  aboutMe = `I am a full-stack data scientist specializing in Python, Angular, and SQL. I use data analytics 
  and machine learning tools to make predictions and make big data insightful. I write data pipelines, APIs, 
  and backend tools for manipulating and reporting on that data and Angular apps for delivering that 
  insight to clients.`
}
