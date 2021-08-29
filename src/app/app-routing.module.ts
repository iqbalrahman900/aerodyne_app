import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RestaurantsCreateComponent } from './admin/restaurants-create/restaurants-create.component';
import { RestaurantsEditComponent } from './admin/restaurants-edit/restaurants-edit.component';
import { RestaurantsViewComponent } from './admin/restaurants-view/restaurants-view.component';
import { RestaurantsComponent } from './admin/restaurants/restaurants.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',component: MainComponent
  },
  {
    path: 'admin', component: AdminComponent,
    children:[
      {
        path: 'restaurants',component: RestaurantsComponent
      },
      {
        path: 'restaurants/create',component: RestaurantsCreateComponent
      },
      {
        path: 'restaurants/:id/edit',component: RestaurantsEditComponent
      },
      {
        path: 'restaurants/:id/view',component: RestaurantsViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
