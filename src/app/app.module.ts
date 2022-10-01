import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LogoComponent } from "./logo/logo.component";
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { BookComponent } from "./books/book/book.component";
import { BookShelfComponent } from "./books/book-shelf/book-shelf.component";
import { BookService } from "./books/books.service";

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    BookComponent,
    BookShelfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: "",
      component: BookShelfComponent,
    }]),
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
