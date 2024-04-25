import { Component, Input, OnInit } from '@angular/core';
import { VerseService } from '../verse.service';
import { Book } from 'src/app/models/book/book';
import { Verse } from 'src/app/models/verse/verse';
import { Version } from 'src/app/models/version/version';

@Component({
  selector: 'app-verse-search',
  templateUrl: './verse-search.component.html',
  styleUrls: ['./verse-search.component.css']
})
export class VerseSearchComponent implements OnInit {

  books: Book[] = [];
  selectedBook: Book = new Book;
  versions: Version[] = [];
  selectedVersion: string = '';
  bookChapters: number[] = [];
  selectedChapter: number = 0;
  verses: Verse[] = [];

  constructor(private verseService: VerseService) { }

  ngOnInit(): void {
    this.getBooks();
    this.getVersions();
  }

  getBooks(): void {
    this.verseService.getBooks().subscribe(data => {
      this.books = data;
    })
  }

  getVersions(): void {
    this.verseService.getVersions().subscribe(data => {
      this.versions = data;
    })
  }

  getBookChapters() {
    this.bookChapters = Array.from({ length: this.selectedBook.chapters }, (_, i) => i + 1);
  }

  getChapter() {
    this.verseService.getChapter(this.selectedVersion, this.selectedBook.abbrev.pt, this.selectedChapter).subscribe(data => {
      this.verses = data.verses
    })
  }

}
