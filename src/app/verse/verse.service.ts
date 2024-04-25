import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Book } from '../models/book/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerseSearch } from '../models/verse-search/verse-search';
import { Version } from '../models/version/version';

@Injectable({
  providedIn: 'root'
})
export class VerseService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + 'books');
  }

  getChapter(version: string, abbrev: string, chapter: number): Observable<VerseSearch> {
    return this.http.get<VerseSearch>(this.apiUrl + 'verses/' + version + '/' + abbrev + '/' + chapter);
  }

  getRandomVerse(version: string): Observable<VerseSearch> {
    return this.http.get<VerseSearch>(this.apiUrl + 'verses/' + version + '/random');
  }

  getVersions(): Observable<Version[]> {
    return this.http.get<Version[]>(this.apiUrl + 'versions');
  }
}
