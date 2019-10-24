import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCriteriaComponent } from './components/search-criteria/search-criteria.component';

const routes: Routes = [
  {
    path: '',
    component: SearchCriteriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
