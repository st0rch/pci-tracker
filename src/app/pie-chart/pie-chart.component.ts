import { Component, OnInit, Input } from '@angular/core';
import { Colors } from '../Shared/Colors';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {


@Input() colorCounts: Colors;
green: number;
red: number;



  chart = [];
  public pieChartLabels = ['In Compliance', 'Out Of Compliance'];
  public pieChartData = [];
  public pieChartType = 'doughnut';
  public colors = [{backgroundColor:["limegreen", "red"],hoverBackgroundColor:"lightblue", borderColor:"white"}];
  public lineChartLegend:boolean = false;
  public border = {borderColor: "black"};


  calculateValid(){
    var percent = this.red / this.green * 100;
    return percent;
  }
  constructor() { }

  ngOnInit() {
    this.red = this.colorCounts.red;
    this.green = this.colorCounts.green;
    console.log(this.green);
    this.pieChartData = [this.green, this.red]

  }

}
