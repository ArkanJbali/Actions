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
               '#FFEB3B',
            '#CDDC39',
            '#FF5722'
            ]};
  // events on slice click
  public chartClicked(e: any): void {
    console.log(e);
  }
  public  getRandomColor() {
    const colored = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + colored).slice(-6);
  }
 // event on pie chart slice hover
  public chartHovered(e: any): void {
    console.log(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
