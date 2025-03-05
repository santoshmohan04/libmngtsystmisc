export interface Book {
  id: number;
  title: string;
  author: string;
  year: string;
  status: string;
}

export interface Student {
  id: number;
  name: string;
}

export interface CheckoutBook {
  id: number;
  book: number;
  student: number;
}

export interface CheckoutBookList {
  id: number;
  checkout_date: string;
  book: number;
  student: number;
}
