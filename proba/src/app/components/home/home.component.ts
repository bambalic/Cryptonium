import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {webSocket} from "rxjs/webSocket"
import { WebsocketService } from '../../services/websocket.service';
import { HttpClient } from '@angular/common/http';
import { SharedetailsService } from '../../services/sharedetails.service';
import { ResponseTuple } from '../../models/responseTuple.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {



  public mapCurrency:Map<string,ResponseTuple>;


  constructor(public websocketService:WebsocketService){

    if(localStorage.getItem("mapCurrency")){
      this.mapCurrency=new Map(JSON.parse(localStorage.getItem("mapCurrency")));
    }else{
      this.mapCurrency=new Map();
    }

  }




  ngOnInit(){

    this.websocketService.sharedValue.subscribe(data=>{
      this.mapCurrency=data;
    });

  }



}
