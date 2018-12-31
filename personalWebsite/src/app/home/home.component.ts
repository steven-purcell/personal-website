import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public doughnutChartLabels = ['Data Science', 'Machine Learning Development', 'Back-End Development',
                                'Front-End Development', 'Rock Climbing', 'Video Games', 'Reading',
                              'Sleeping', 'Eating', 'Driving'];
  public doughnutChartData = [4, 3, 2, 2, 1, 1, 1, 7, 2, 1];
  public doughnutChartType = 'doughnut';
  public doughnutChartOptions = {cutoutPercentage:50, legend: {display: false}};
  
  constructor() { }
  ngOnInit() {
  }
}