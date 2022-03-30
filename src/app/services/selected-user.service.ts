import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedUserService {

  selectedEmploye : string = ""

  setEmploye(employe : string) {
    this.selectedEmploye = employe;
  }

  constructor() { }
}
