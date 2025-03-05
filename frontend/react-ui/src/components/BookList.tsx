import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { Book } from "../types/types";
import { getBooks } from "../services/api";

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks().then((data) => setBooks(data));
  }, []);

  return (
    <Container className="mt-4">
      <h2>Library Books</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>{book.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default BookList;