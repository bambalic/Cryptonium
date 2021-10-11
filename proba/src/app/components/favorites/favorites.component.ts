import { Component, OnInit } from '@angular/core';
import { ResponseCustom } from '../../models/responseCustom.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {


  public favorites:Map<string,ResponseCustom>;


  constructor() { }

  ngOnInit(): void {

    this.favorites=new Map(JSON.parse(localStorage.getItem("favorites")));
  }

}
