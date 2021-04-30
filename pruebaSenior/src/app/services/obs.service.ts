import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObsService {
  
  dato$ = new EventEmitter<String>();

constructor() {

}

}
