import { Component, OnInit } from '@angular/core';
import DataService from 'src/app/service/data.service';

/**
 * Uses local service
 */
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [DataService]
})
export class ParentComponent implements OnInit {

  public data: string;

  constructor(private dataService: DataService) {
    console.log("ParentComponent.constructor()");
  }

  ngOnInit() {
    this.dataService.dataChanged.subscribe(
      (data) => {
        this.data = data;
      }
    );

    // Get initial data
    this.dataService.updateData("Other value (service from parent-component)");
    this.data = this.dataService.getData();
  }

  updateService() {
    this.dataService.updateData(this.data + " Local ");
  }
}
