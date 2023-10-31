import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*/*'
  })
};

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = 'https://api.dandelion.eu/datatxt/';

  constructor(private http: HttpClient) {
  }


  // Example GET request
  getRequest(endpoint: string, endParam: string ): Observable<any> {
    console.log("HELLO");
    
    return this.http.get<string>(`${this.apiUrl}/${endpoint}?${endParam}`, );
  }

  // Example POST request with data
  postRequest(endpoint: string, postObject: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, postObject, );
  }
}
