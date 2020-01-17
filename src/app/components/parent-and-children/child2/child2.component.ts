import { Component, OnInit } from '@angular/core';
import DataService from 'src/app/service/data.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

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
