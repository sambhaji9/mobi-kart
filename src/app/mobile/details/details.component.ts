import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-details',
   templateUrl: './details.component.html',
   styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

   phoneDetails;
   tiles: Tile[] = [
      { text: 'One', cols: 3, rows: 1, color: 'lightblue' }
   ];

   constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

   ngOnInit() {
      this.http.get('http://localhost:3000/details?id=' + this.activatedRoute.snapshot.params.id).subscribe(data => {
         this.phoneDetails = data;
      });
   }

}

export interface Tile {
   color: string;
   cols: number;
   rows: number;
   text: string;
}
