import { Component, OnInit } from '@angular/core';
import { APIService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'What We Eatin';

  restaurants: Array<any>;

  constructor(private apiService: APIService) {}

  async ngOnInit() {
    this.apiService.ListRestaurants().then((evt) => {
      this.restaurants = evt.items;
    });
  }

  createRestaurant() {
    this.apiService.CreateRestaurant({
      id: 'Test',
      name: 'Test',
      rating: 4.5,
      price: 'Test',
      category: 'Test',
      url: 'Test',
      imageUrl: 'Test',
      zip: 33634,
      address: 'Test',
    });
  }
}
