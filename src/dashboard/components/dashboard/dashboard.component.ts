import { Component, OnInit } from '@angular/core';
import DataService from '../../../app/service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public data: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.dataChanged.subscribe(
      (data) => {
        this.data = data;
      }
    );

    // Get initial data
    this.data = this.dataService.getData();
  }

}
