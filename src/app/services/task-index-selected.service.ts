import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskIndexSelectedService {

  constructor() { }

  index : number = 0;

  setIndex(selection : number) {
    this.index = selection
  }

  getIndex() {
    return this.index
  }

}
