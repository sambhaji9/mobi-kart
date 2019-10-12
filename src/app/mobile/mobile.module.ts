import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ListComponent, DetailsComponent, CartComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [ListComponent]
})
export class MobileModule { }
