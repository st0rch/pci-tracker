import { Component, OnInit, Input } from '@angular/core';
import { Colors } from '../Shared/Colors';
import { ChartsModule } from 'ng2-charts';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {


@Input() colorCounts: Colors;
green: number;
red: number;
doughnutChartData: any;

  public doughnutChartLabels: Label[] = ['Compliant', 'Non-Compliant'];
  public doughnutChartType: ChartType = 'doughnut';
  public lineChartLegend: boolean = false;

  public chartColors: Array<any> =     [{ backgroundColor: ["#009933", "#cc0000"] }];




  constructor() { }

  ngOnInit() {
    this.red = this.colorCounts.red;
    this.green = this.colorCounts.green;
    console.log(this.green);
    this.doughnutChartData = [
      [this.green, this.red],
    ];

  }
      // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }


    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
}
