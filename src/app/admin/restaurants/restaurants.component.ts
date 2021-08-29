import { Component, OnInit } from '@angular/core';
import { Restaurants } from 'src/app/interfaces/restaurants';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurants[] = [] // interface




  

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit(): void {
    this.restaurantsService.all().subscribe(
      restaurants => {
        this.restaurants = restaurants
      }
    )

  }

  
  
  restaurantsDel(id: number): void {
    this.restaurantsService.delete(id).subscribe(
      () => {
        this.restaurants = this.restaurants.filter( p => p.id !== id );
      }
    )
  }

}
