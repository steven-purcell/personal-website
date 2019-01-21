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
  public skill1: string;
  public skill2: string;
  public skill3: string;
  public options: any;

  public doughnutChartLabels = ['Data Science', 'Machine Learning Development', 'Back-End Development',
                                'Front-End Development', 'Rock Climbing', 'Video Games'];
  public doughnutChartData = [4, 3, 2, 2, 1, 1];
  public doughnutChartType = 'doughnut';
  public doughnutChartOptions = {cutoutPercentage:50, legend: {display: false}, tooltips: {
    callbacks: {afterLabel: (item) => `(hours)`}
  }};
  
  constructor() {
    this.percent1 = 40;
    this.percent2 = 25;
    this.percent3 = 45;
    this.skill1 = "Python";
    this.skill2 = "Angular 7";
    this.skill3 = "Data Analytics";
    this.options = {
      barColor: function(percent) {
        var ctx = this.renderer.getCtx();
        var canvas = this.renderer.getCanvas();
        var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
            gradient.addColorStop(0, "#FFFF00");
            gradient.addColorStop(1, "#008000");
        return gradient;},
      trackColor: 'transparent',
      scaleColor: 'transparent',
      scaleLength: 5,
      lineCap: 'square',
      lineWidth: 20,
      size: 250,
      rotate: -90,
      animate: {
          duration: 1000,
          enabled: true
      }
    };
  }
  ngOnInit() {
  } 
}
