import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Restaurants } from 'src/app/interfaces/restaurants';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurants-view',
  templateUrl: './restaurants-view.component.html',
  styleUrls: ['./restaurants-view.component.css']
})
export class RestaurantsViewComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  zoom: number = 1;
  restaurants!: Observable<Restaurants[]>; 
  
  currentId = 0;
  
  protected map: any;
  

  constructor(private restaurantsService: RestaurantsService , private route:ActivatedRoute ) { }

  ngOnInit(): void {
    
    this.currentId= this.route.snapshot.params.id
   this.restaurants = this.restaurantsService.all()

  }
  public mapReady(map:any) {
    this.restaurants.subscribe(
      res => {
        console.log(res);
        console.log(this.currentId);
        console.log(res.find(res=>+res.id===+this.currentId));
        const latitude = res.find(res=>+res.id===+this.currentId)?.latitude;
        const longitude = res.find(res=>+res.id===+this.currentId)?.longitude;
        this.map = map;
        this.map.setCenter({ lat: latitude, lng: longitude });
        console.log(latitude);
   
      }
    )


    

  }

}
