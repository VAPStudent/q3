export class BookModel {
  bookid: string;
  bookname: string;
  author: string;
  bookstatus: string;
  category: string;


  constructor(bookid, bookname, author, bookstatus, category) {
    this.bookid = bookid;
    this.bookname = bookname;
    this.author = author;
    this.bookstatus = bookstatus;
    this.category = category;
  }
}
