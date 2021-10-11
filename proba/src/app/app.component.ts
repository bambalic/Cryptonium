import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { HttpClient } from '@angular/common/http';

declare var particlesJS: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proba';




  constructor(public websocketService:WebsocketService,private http: HttpClient){

  }





  ngOnInit(){
    particlesJS.load('particles-js', '../assets/particles.json', null);


  }



}
