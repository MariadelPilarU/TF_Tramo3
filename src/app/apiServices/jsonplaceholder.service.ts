import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  url = 'https://jsonplaceholder.typicode.com/';
  
  constructor(private http:HttpClient) { }
  
  allPost(){
    return this.http.get(this.url + 'post');
  }
}
