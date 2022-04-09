import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskIndexSelectedService {

  constructor() { }

  index ?: number;

  setIndex(selection : number) {
    this.index = selection
  }

  getIndex() {
    return this.index
  }

}
