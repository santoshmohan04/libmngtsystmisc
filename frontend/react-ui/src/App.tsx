import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import BookList from "./components/BookList";
import StudentList from "./components/StudentList";
import CheckoutBook from "./components/CheckoutBook";
import CheckOutList from "./components/CheckoutList";

const App: React.FC = () => {
  const [refreshCheckoutList, setRefreshCheckoutList] = useState(false);

  const handleCheckoutSuccess = () => {
    setRefreshCheckoutList((prev) => !prev); // Toggle state to trigger re-fetch
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center">Library Management System</h1>
      <Row>
        <Col md={6}>
          <BookList />
        </Col>
        <Col md={6}>
          <StudentList />
        </Col>
      </Row>
      <Row>
      <Col md={6}>
         <CheckOutList refreshTrigger={refreshCheckoutList} />
        </Col>
        <Col md={6}>
          <CheckoutBook onCheckoutComplete={handleCheckoutSuccess} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;