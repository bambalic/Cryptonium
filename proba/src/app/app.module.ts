import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntryComponent } from './components/entry/entry.component';
import { HeaderComponent } from './components/header/header.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WebsocketService } from './services/websocket.service';
import { SharedetailsService } from './services/sharedetails.service';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    HeaderComponent,
    FavoritesComponent,
    DetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [HttpClient,WebsocketService,SharedetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
