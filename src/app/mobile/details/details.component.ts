import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { IPhoneDetails } from './details.model';

@Component({
   selector: 'app-details',
   templateUrl: './details.component.html',
   styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

   phoneDetails: IPhoneDetails;
   selectedImage: string;

   constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
      this.phoneDetails = {
         additionalFeatures: '',
         android: {
            os: '',
            ui: ''
         },
         availability: [
            ''
         ],
         battery: {
            standbyTime: '',
            talkTime: '',
            type: ''
         },
         camera: {
            features: [],
            primary: ''
         },
         connectivity: {
            bluetooth: '',
            cell: '',
            gps: true,
            infrared: false,
            wifi: ''
         },
         description: '',
         display: {
            screenResolution: '',
            screenSize: '',
            touchScreen: true
         },
         hardware: {
            accelerometer: true,
            audioJack: '',
            cpu: '',
            fmRadio: false,
            physicalKeyboard: false,
            usb: ''
         },
         id: '',
         images: [],
         name: '',
         sizeAndWeight: {
            dimensions: [],
            weight: ''
         },
         storage: {
            flash: '',
            ram: ''
         }
      };
   }

   ngOnInit() {
      this.http.get('http://localhost:3000/details?id=' + this.activatedRoute.snapshot.params.id).subscribe((data: IPhoneDetails) => {
         this.phoneDetails = data;

         this.selectedImage = this.phoneDetails.images[0];
      });
   }

   /**
    * function showing the selected image
    * @param image, the image name to be displayed
    */
   showSelectedImage(image: string) {
      this.selectedImage = image;
   }

}
