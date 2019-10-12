import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class ListService {

   constructor(private httpClient: HttpClient) { }

   getPhonesList() {
      return this.httpClient.get('http://localhost:3000/list');
   }
}
