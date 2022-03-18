import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskSharedService {

  constructor() { }

  private message = new BehaviorSubject('First message');

  sharedMessage = this.message.asObservable();

  nextMessage(message:string) {
    this.message.next(message);
  }

}
