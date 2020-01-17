import { Component, OnInit } from '@angular/core';
import DataService from '../../../../app/service/data.service';

/**
 * Uses service from module level
 */
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  public data: string;

  constructor(private dataService: DataService) {
    console.log("MasterComponent.constructor()");
  }

  ngOnInit() {
    this.dataService.dataChanged.subscribe(
      (data) => {
        this.data = data;
      }
    );

    this.dataService.updateData("Initial Value (service from module level)");
  }

  updateService() {
    this.dataService.updateData(this.data + " Global ");
  }

}
