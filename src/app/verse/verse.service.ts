import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Book } from '../models/book/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Abbrev } from '../models/abbrev/abbrev';
import { Verse } from '../models/verse/verse';

@Injectable({
  providedIn: 'root'
})
export class VerseService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + 'books');
  }

  getChapter(version: string, abbrev: Abbrev, chapter: number): Observable<Verse[]> {
    return this.http.get<Verse[]>(this.apiUrl + 'verses/' + version + '/' + abbrev.pt + '/' + chapter);
  }

  getRandomVerse(version: string): Observable<Verse> {
    return this.http.get<Verse>(this.apiUrl + 'verses/' + version + '/random');
  }
}
