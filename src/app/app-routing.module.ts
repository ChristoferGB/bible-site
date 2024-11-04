import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerseSearchComponent } from './verse/verse-search/verse-search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'read', component: VerseSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
