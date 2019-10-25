import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { API } from 'aws-amplify';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchLoaderService {
  httpHeaders: HttpHeaders;
  constructor(
    private http: HttpClient,
    private api: APIService,
  ) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      // tslint:disable-next-line:max-line-length
      'Authorization': 'Bearer qXiT_AqB2jMdw-kCO6nM_ykuvl6z3FO6GXfXWmNbLBnal6zsCiMLech8MicwoSgRWSUBIA5cYPaVH9BR_BzjV4efynw4NWzfxe_7y8jMMTPTD4j187COT4ruwXyoXXYx'
    });
  }

  getRestaurants(zip: number) {
    console.log(zip);

    const apiName = 'yelpApi';
    const path = '/yelp';
    const myInit = { // OPTIONAL
        headers: {}, // OPTIONAL
        response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
        // queryStringParameters: {  // OPTIONAL
        //     location: zip
        // }
    };

    return API.get(apiName, path, myInit).then(response => {
      console.log(response);
      response.businesses.forEach(business => {
        this.api.CreateRestaurant({
          id: business.id,
          name: business.name,
          rating: business.rating,
          price: business.price,
          category: business.categories.toString(),
          url: business.url,
          imageUrl: business.image_url,
          zip: zip,
          address: business.location.display_address,
        });
      });

      return response.businesses;
    })
    .catch(error => {
      this.handleError(error);
    });
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('An error occurred');
  }
}
