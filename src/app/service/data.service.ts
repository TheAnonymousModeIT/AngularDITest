import { EventEmitter, Injectable } from '@angular/core';

// @Injectable({
//     providedIn: 'root',
// })
export default class DataService {
    private data: string;

    constructor() {
        console.log("DataService.constructor()");
    }

    public dataChanged: EventEmitter<string> = new EventEmitter<string>();

    public updateData(value: string) {
        this.data = value;
        this.dataChanged.emit(this.data);
    }

    public getData() {
        return this.data;
    }
}