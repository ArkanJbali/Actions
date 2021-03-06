import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import {HomePageServiceService} from '../Service/home-page.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator) paginator2: MatPaginator;
  displayedColumns = ['id', 'eventName', 'severity', 'description', 'Solution'];
  displayedColumns2 = ['App Name', 'Action Num', 'Def'];
  ActionLogData;
  byAppData;
  bySevData;
  _Critical: String = 'critical';
  _Warning: String = 'Warning';
  _Error: String = 'Error';
  constructor(private homeService: HomePageServiceService) { }
  ngOnInit() {
    this.homeService.getPosts().subscribe(results => {
      if (!results) {
        return;
      }
      this.ActionLogData = new MatTableDataSource(results);
      this.ActionLogData.sort = this.sort;
      this.ActionLogData.paginator = this.paginator;
    });
    this.homeService.getApp().subscribe(results2 => {
      if (!results2) {
        return;
      }
      this.byAppData = new MatTableDataSource(results2);
      this.byAppData.sort = this.sort;
      this.byAppData.paginator2 = this.paginator2;
    });
    this.homeService.getSev().subscribe(results3 => {
      if (!results3) {
        return;
      }
      this.bySevData = new MatTableDataSource(results3);
      this.bySevData.sort = this.sort;
      this.bySevData.paginator = this.paginator;
    });

  }
}
