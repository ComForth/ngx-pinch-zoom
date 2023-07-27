import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PinchZoomService {

  imgChanged = new Subject();
  zoomOut = new Subject();

  constructor() { }

  reInitPinchZoom(imgId: string) {
    this.imgChanged.next({imgId: imgId, refresh: true});
  }

  initZoomOut(imgId: string) {
    this.zoomOut.next(imgId);
  }
}
