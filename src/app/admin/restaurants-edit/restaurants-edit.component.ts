import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurants-edit',
  templateUrl: './restaurants-edit.component.html',
  styleUrls: ['./restaurants-edit.component.css']
})
export class RestaurantsEditComponent implements OnInit {

  form: FormGroup;
  id: number;
  activatedRoute: any;
  restaurantDetails: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService,
    private router: Router
    ) {
    this.form = this.formBuilder.group({
      restaurants: '',
      latitude: '',
      longitude: '' ,
      image: ''
    })

    this.id = this.route.snapshot.params.id;

    this.restaurantsService.get(this.id).subscribe(
      restaurants => this.form.patchValue(restaurants)
    )

   }

  ngOnInit(): void {



    
  }

  submit(): void {
    this.restaurantsService.update(this.id, this.form.getRawValue()).subscribe(
      () => {
        this.router.navigate(['/admin/restaurants'])
      }
    )
  }

}