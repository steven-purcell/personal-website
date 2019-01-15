import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public percent1: number;
  public percent2: number;
  public percent3: number;
  public options: any;

  public doughnutChartLabels = ['Data Science', 'Machine Learning Development', 'Back-End Development',
                                'Front-End Development', 'Rock Climbing', 'Video Games', 'Reading',
                              'Sleeping', 'Eating', 'Commuting'];
  public doughnutChartData = [4, 3, 2, 2, 1, 1, 1, 7, 2, 1];
  public doughnutChartType = 'doughnut';
  public doughnutChartOptions = {cutoutPercentage:0, legend: {display: false}};
  
  constructor() {
    this.percent1 = 75;
    this.percent2 = 45;
    this.percent3 = 80;
    this.options = {
      barColor: 'red',
      trackColor: 'white',
      scaleColor: 'black',
      scaleLength: 5,
      lineCap: 'round',
      lineWidth: 10,
      size: 250,
      rotate: 0,
      animate: {
          duration: 1000,
          enabled: true
      }
    };
  }
  ngOnInit() {
  } 
}
