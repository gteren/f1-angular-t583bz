import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from './driver';
import { Observable } from 'rxjs'; 
 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRes(){
    return this.http.get('https://ergast.com/api/f1/2008/5/results.json');
  }

}