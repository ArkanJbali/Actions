import { ActionLog } from './../Model/HomePage.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator } from '@angular/material';
import {HomePageServiceService} from '../Service/home-page.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['seqID', 'Net.Title', 'Severity', 'Description', 'Solution'];
  ActionLogData;
  _Critical: String = 'Critical';
  _Warning: String = 'Warning';
  _Error: String = 'Error';
  constructor(private homeService: HomePageServiceService) { }
  ngOnInit() {
    this.homeService.getActionLog().subscribe(results => {
      if (!results) {
        return;
      }
      this.ActionLogData = new MatTableDataSource(results);
      this.ActionLogData.sort = this.sort;
      this.ActionLogData.paginator = this.paginator;
    });
  }

}
