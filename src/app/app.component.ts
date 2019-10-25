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
    // this.apiService.ListRestaurants().then((evt) => {
    //   this.restaurants = evt.items;
    // });
  }
}
