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
   selectedImage;
   tiles: Tile[] = [
      { text: 'One', cols: 3, rows: 1, color: 'lightblue' }
   ];

   constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

   ngOnInit() {
      this.http.get('http://localhost:3000/details?id=' + this.activatedRoute.snapshot.params.id).subscribe(data => {
         this.phoneDetails = data;

         this.selectedImage = this.phoneDetails.images[0]
         console.log(this.selectedImage); 
      });
   }

   /**
    * function showing the selected image
    * @param image 
    */
   showSelectedImage(image) {
      console.log(this.selectedImage); 
      this.selectedImage = image;
   }

}

export interface Tile {
   color: string;
   cols: number;
   rows: number;
   text: string;
}
