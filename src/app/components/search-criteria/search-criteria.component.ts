import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  form;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      zipCode: ''
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
