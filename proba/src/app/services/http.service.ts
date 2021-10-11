import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // private configUrl="/v1/symbols";
  private configUrl=environment.API_ENDPOINT;

public getConfig() {
  return this.http.get<any>(this.configUrl);
}

public config;

public showConfig() {
  this.getConfig()
    .subscribe((data: any) => this.config = data);
}


  constructor(private http: HttpClient) { }
}
