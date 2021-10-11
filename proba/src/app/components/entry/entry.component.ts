import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedetailsService } from '../../services/sharedetails.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {


  @Input()
  public data;

  public favoritePage=false;

  public removeLeadingChar(s:string):string{
    return s.substring(1);
  }

  public sendDetailsData(){

    this.shareDetailsService.shareDetails.next(this.data);
    // console.log("SEND DETAILS");
  }


  constructor(private shareDetailsService:SharedetailsService,private router:Router) {

  }

  ngOnInit(): void {
    if(this.router.url=="/favorites"){
      this.favoritePage=true;
    }
  }

}
