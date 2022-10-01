import { Component, OnInit } from "@angular/core";
import { Book, BookstoreResponse } from "../models/book";
import { BookService } from "../books.service";

@Component({
  selector: "app-book-shelf",
  templateUrl: "./book-shelf.component.html",
  styleUrls: ["./book-shelf.component.css"],
})
export class BookShelfComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getNewestBooks().subscribe((data) => {
      this.books = (data as BookstoreResponse).books;
    });
  }
}
