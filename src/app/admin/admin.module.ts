import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsCreateComponent } from './restaurants-create/restaurants-create.component';
import { RestaurantsEditComponent } from './restaurants-edit/restaurants-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantsViewComponent } from './restaurants-view/restaurants-view.component';
import { AgmCoreModule } from '@agm/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AdminComponent,
    MenuComponent,
    NavComponent,
    RestaurantsComponent,
    RestaurantsCreateComponent,
    RestaurantsEditComponent,
    RestaurantsViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,  
    MatTableModule,
    Ng2SearchPipeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlhf64Y3UFgdocsAoxvU0F4_oP66R9NYo'
    })
  ]
})
export class AdminModule { }
