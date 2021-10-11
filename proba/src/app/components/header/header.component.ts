import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @Input() loggedIn:boolean;

  // @Output() loginEvent = new EventEmitter<string>();

  // loginFromParent() {
  //   this.loginEvent.emit('login');
  // }


  public loggedIn=JSON.parse(localStorage.getItem("loggedIn")) || false;

  public login(){
    this.loggedIn=true;
    localStorage.setItem("loggedIn","true");
    // console.log("ovde"+this.loggedIn);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
