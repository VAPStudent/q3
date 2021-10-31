import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from '../book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = "http://localhost:3000/books";

  constructor(private _httpClient: HttpClient) { }

  GetBooks() {
    return this._httpClient.get<BookModel[]>(this.url);
  }

}
