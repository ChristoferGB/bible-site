import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VerseSearchComponent } from './verse/verse-search/verse-search.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'read', component: VerseSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
