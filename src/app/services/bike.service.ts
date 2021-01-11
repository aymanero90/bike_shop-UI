import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBike } from '../interfaces/ibike';

const httpOptions = {
  headers: new HttpHeaders( { 'content-Type' : 'application/json' })  // deal wth applicatin json or json payload 
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http:HttpClient) { }

  getBikes () : Observable <IBike []>{
    return this.http.get <IBike[]> ('/server/app/bikes')  // return observable  /server for proxy and then followed by api directory
  }
}
