import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ResponseTuple } from '../models/responseTuple.model';

@Injectable({
  providedIn: 'root'
})
export class SharedetailsService {

  public shareDetails:BehaviorSubject<ResponseTuple>=new BehaviorSubject(undefined);
  public shared=this.shareDetails.asObservable();

  constructor() {

  }
}
