export interface Book {
  id: string;
  authors: string;
  img: string;
  subtitle: string;
  title: string;
  image: string;
  url: string;
}

export interface BookstoreResponse {
  total: number;
  status: string;
  books: Book[];
}
