import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public doughnutChartLabels = ['Data Science', 'Back-End Development', 'Front-End Development', 
                                'Rock Climbing', 'Video Games', 'Reading'];
  public doughnutChartData = [4, 2, 2, 1, 1, 1];
  public doughnutChartType = 'doughnut';
  public doughnutChartOptions = {cutoutPercentage:25, legend: {display: true}};
  public colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

  // public innerDoughnutChartLabels = ['Machine Learning', 'Data Exploration', 'Report Generation', 
  //                             'Angular', 'Bouldering', 'Overwatch', 'Fantasy', 'Science Fiction'];
  // public innerDoughnutChartData = [20, 20, 5, 10, 5, 10, 20, 10];
  // public innerDoughnutChartType = 'doughnut';
  // public innerDoughnutChartOptions = {cutoutPercentage:25, maintainAspectRatio : false, legend: {display: false}};
  constructor() { }
  ngOnInit() {
  }
}