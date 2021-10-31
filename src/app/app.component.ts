import { Component, OnInit } from '@angular/core';
import { BookModel } from './book.model';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'q3';

  columns = ["Id", "Book Name", "Author", "Status", "Category"];
  index = ["bookid", "bookname", "author", "bookstatus", "category"];

  myBooks: BookModel[] = [];

  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this._bookService.GetBooks()
      .subscribe(sub => {
        this.myBooks = sub;
      },
        error => console.log(error)
      )
  }
}
