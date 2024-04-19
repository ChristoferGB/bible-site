import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { VerseSearchComponent } from './verse-search/verse-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VerseSearchComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule
  ]
})
export class VerseModule { }
