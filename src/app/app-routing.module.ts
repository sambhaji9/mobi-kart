import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './mobile/list/list.component';
import { DetailsComponent } from './mobile/details/details.component';
import { CartComponent } from './mobile/cart/cart.component';

const routes: Routes = [
   {
      path: '',
      component: ListComponent
   },
   {
      path: 'details/:id',
      component: DetailsComponent
   },
   {
      path: 'cart/:id',
      component: CartComponent
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
