import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
  } from '@angular/material';

@NgModule({
  declarations: [
  ],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
  ],
  providers: [],
})
export class AppMaterialModule { }
