import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type Qoute = {
  "id": number,
  "quote": string,
  "author": string
}

@Injectable({
  providedIn: 'root'
})
export class QouteService {

  constructor(private http: HttpClient) { }

  public getQoute() {

    return this.http.get<any>(
      'https://dummyjson.com/quotes/random', 
      {responseType: "json"}
    )
  }

}
