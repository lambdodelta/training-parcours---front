import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  private subject = new Subject<any>();

  constructor() { }

  onlisten(filter : string) : void {
    this.subject.next(filter)
  }

  getEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
