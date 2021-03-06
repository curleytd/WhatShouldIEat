import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchLoaderService } from '../../services/search-loader.service';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  form;

  constructor(
    private fb: FormBuilder,
    private searchLoaderService: SearchLoaderService
    ) {
    this.form = fb.group({
      zipCode: ''
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
    this.searchLoaderService.getRestaurants(this.form.value.zipCode);
  }
}
