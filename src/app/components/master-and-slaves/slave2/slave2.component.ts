import { Component, OnInit } from '@angular/core';
import DataService from '../../../../app/service/data.service';

@Component({
  selector: 'app-slave2',
  templateUrl: './slave2.component.html',
  styleUrls: ['./slave2.component.css']
})
export class Slave2Component implements OnInit {

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
