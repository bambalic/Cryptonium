import { Component, OnInit } from '@angular/core';
import { ResponseCustom } from '../../models/responseCustom.model';
import { ResponseTuple } from '../../models/responseTuple.model';
import { SharedetailsService } from '../../services/sharedetails.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public detailsData:ResponseTuple=new ResponseTuple();
  public favorite:boolean;
  public favorites;
  public loggedIn:boolean=JSON.parse(localStorage.getItem("loggedIn")) || false;

  public addToFavorites(){
    this.favorite=true;

    let localFavorites:Map<string,ResponseTuple>=new Map(JSON.parse(localStorage.getItem("favorites")));

    localFavorites.set(this.detailsData.currency,this.detailsData);

    localStorage.setItem("favorites",JSON.stringify(Array.from(localFavorites.entries())));

  }

  public removeFromFavorites(){

    this.favorite=false;

    let localFavorites:Map<string,ResponseCustom>=new Map(JSON.parse(localStorage.getItem("favorites")));

    if(localFavorites.get(this.detailsData.currency)){
      localFavorites.delete(this.detailsData.currency);
    }

    localStorage.setItem("favorites",JSON.stringify(Array.from(localFavorites.entries())));

  }

  constructor(private shareDetailsService:SharedetailsService) {

   }

  ngOnInit(): void {

    this.shareDetailsService.shareDetails.subscribe(data=>{
      this.detailsData=data;

      let localFavorites=(new Map(JSON.parse(localStorage.getItem("favorites"))));

      if(localFavorites.has(this.detailsData.currency)){
        this.favorite=true;
      }else{
        this.favorite=false;
      }
    });
  }

}
