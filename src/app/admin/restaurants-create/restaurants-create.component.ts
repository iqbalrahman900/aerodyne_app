import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurants-create',
  templateUrl: './restaurants-create.component.html',
  styleUrls: ['./restaurants-create.component.css']
})
export class RestaurantsCreateComponent implements OnInit {

  restaurants = '';
  latitude = '';
  longitude = '' ;
  image = '' ;

  constructor(
    private restaurantsService: RestaurantsService,
    private router: Router
    
    ) { }

  ngOnInit(): void {

  }
  submit(): void{
    const data = {
      restaurants: this.restaurants,
      latitude: this.latitude,
      longitude: this.longitude,
      image: this.image
    }

    this.restaurantsService.create(data).subscribe(
      () => {
        this.router.navigate(['/admin/restaurants'])
      }
    )

  }

}
