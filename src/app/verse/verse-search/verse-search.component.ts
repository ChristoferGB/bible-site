import { Component, Input, OnInit } from '@angular/core';
import { VerseService } from '../verse.service';
import { Book } from 'src/app/models/book/book';
import { Abbrev } from 'src/app/models/abbrev/abbrev';
import { Verse } from 'src/app/models/verse/verse';

@Component({
  selector: 'app-verse-search',
  templateUrl: './verse-search.component.html',
  styleUrls: ['./verse-search.component.css']
})
export class VerseSearchComponent implements OnInit {

  books: Book[] = [];
  selectedBook: Book = new Book;
  selectedChapter: number = 0;
  bookChapters: number[] = [];
  verses: Verse[] = [];

  constructor(private verseService: VerseService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.verseService.getBooks().subscribe(data => {
      this.books = data;
    })
  }

  getBookChapters() {
    this.bookChapters = Array.from({ length: this.selectedBook.chapters }, (_, i) => i + 1);
  }

  getChapter() {
    this.verseService.getChapter("nvi", this.selectedBook.abbrev, this.selectedChapter).subscribe((data: any) => {
      console.log(data);
      this.verses = data.verses;
    })
  } 

}
