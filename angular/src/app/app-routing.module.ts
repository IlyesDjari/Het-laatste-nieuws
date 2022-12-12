import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadlinesComponent } from './headlines/headlines.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

const routes: Routes = [
  {
    path: 'detail',
    component: NewsDetailComponent
  },
  {
    path: ':category',
    component: HeadlinesComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
