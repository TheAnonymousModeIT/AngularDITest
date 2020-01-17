import { Component, OnInit } from '@angular/core';
import DataService from 'src/app/service/data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

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
