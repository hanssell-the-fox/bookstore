import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class BookService {
  private baseUrl = "https://www.dbooks.org/api";

  httpOptions = {
    Headers: new HttpHeaders({
      "content-type": "application/json",
    }),
  };

  constructor(private connection: HttpClient) {}

  getNewestBooks() {
    return this.connection.get(`${this.baseUrl}/recent`);
  }
}
