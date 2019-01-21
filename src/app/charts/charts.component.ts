import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  public pieChartLabels: string[] = ['BLM', 'JF', 'CM'];
  public pieChartData: number[] = [21, 39, 10];
  public pieChartType = 'pie';
  public pieChartOptions: any = {'backgroundColor': [
               '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB'
            ]};
  // events on slice click
  public chartClicked(e: any): void {
    console.log(e);
  }
 // event on pie chart slice hover
  public chartHovered(e: any): void {
    console.log(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
