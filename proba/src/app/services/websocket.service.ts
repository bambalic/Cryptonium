import { KeyValue } from '@angular/common';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';
import { ResponseCustom } from '../models/responseCustom.model';
import { ResponseInitial } from '../models/responseInitial.model';
import { ResponseTuple } from '../models/responseTuple.model';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService{

  private wsUrl:string=environment.WS_URL;
  public currencyAbbreviations;
  subscription;



  private _wsSubject: WebSocketSubject<any>;

  private get wsSubject(): WebSocketSubject<any> {
    const closed = !this._wsSubject || this._wsSubject.closed;
    if (closed) {
      this._wsSubject = new WebSocketSubject(this.wsUrl);


      this.httpService.getConfig().subscribe(((data: any) => {
        this.currencyAbbreviations = data;
        // console.log("aa");
        for(let i=0;i<environment.NUMBER_OF_CURRENCIES;i++){
          let msg={
            event:"subscribe",
            channel:"ticker",
            symbol:"t"+this.currencyAbbreviations[i].toUpperCase()
          }
          // console.log("t"+this.currencyAbbreviations[i])


          this._wsSubject.next(msg);

        }
      }));


    }
    return this._wsSubject;
  }



  get priceUpdates$(): Observable<any> {
    console.log(this.wsSubject)
    return this.wsSubject.asObservable();
  }









  sharedValue:Subject<Map<string,ResponseTuple>>=new Subject();

  public mapCurrency:Map<string,ResponseTuple>;


  private setCurrencyInMap(id:string,currencyName:string){

    this.mapCurrency.set(id,{currency:currencyName,other:undefined});
    localStorage.setItem("mapCurrency",JSON.stringify(Array.from(this.mapCurrency.entries())));
  }

  private setOtherInMap(id:string,otherStuff){

    if(this.mapCurrency.get(id)){
      this.mapCurrency.get(id).other=otherStuff;
      localStorage.setItem("mapCurrency",JSON.stringify(Array.from(this.mapCurrency.entries())));
    }else{
      return
    }

  }


  private myObserver = {
    next: (response: ResponseInitial) => {

      // heartbeat (ignore)
      if(response[1]=="hb"){

      }else if(response["event"]=="subscribed"){

        this.setCurrencyInMap(response["chanId"],response["symbol"]);
        this.sharedValue.next(this.mapCurrency);

      }else if(response[1]!=undefined){
        // console.log(x[1]);
      let responseCustom=new ResponseCustom(response[1]);

      // console.log(x);

      this.setOtherInMap(response[0],responseCustom);

      this.sharedValue.next(this.mapCurrency);

      // console.log(this.mapCurrency);
  }},
    error: (err: Error) => {console.error('Observer error: ' + err)},
    complete: () => {console.log('Observer complete')},
  };

  constructor(private httpService:HttpService) {
    // this.wsUrl="wss://api-pub.bitfinex.com/ws/2";

    this.mapCurrency=new Map();

    this.subscription=this.priceUpdates$.subscribe(this.myObserver);

  }


  // ngOnDestroy(){
  //   // this.subscription.unsubscribe();

  //   console.log("NG");
  //   let channels=JSON.parse(localStorage.getItem("mapCurrency"));
  //   for(let c of channels){

  //       let msg={
  //         event:"unsubscribe",
  //         channId: c.key,
  //       }

  //       this._wsSubject.next(msg);


  //   }

  //   // this.subscription.unsubscribe();

  //   if (this._wsSubject) {
  //     this._wsSubject.complete();
  //     this._wsSubject = null;
  //   }

  //   this.subscription.unsubscribe();


  //   // this._wsSubject.unsubscribe();
  // }
}
