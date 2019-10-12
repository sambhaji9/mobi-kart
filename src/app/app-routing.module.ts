import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './mobile/list/list.component';
import { DetailsComponent } from './mobile/details/details.component';
import { CartComponent } from './mobile/cart/cart.component';

const routes: Routes = [
   {
      path: '',
      component: ListComponent,
      data: {animations: 'ListComponent'}
   },
   {
      path: 'details/:id',
      component: DetailsComponent,
      data: {animations: 'DetailsComponent'}
   },
   {
      path: 'cart/:id',
      component: CartComponent,
      data: {animations: 'CartComponent'}
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
   })],
   exports: [RouterModule]
})
export class AppRoutingModule { }
