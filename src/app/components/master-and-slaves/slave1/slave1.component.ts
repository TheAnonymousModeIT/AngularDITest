import { Component, OnInit } from '@angular/core';
import DataService from '../../../../app/service/data.service';

@Component({
  selector: 'app-slave1',
  templateUrl: './slave1.component.html',
  styleUrls: ['./slave1.component.css']
})
export class Slave1Component implements OnInit {

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
