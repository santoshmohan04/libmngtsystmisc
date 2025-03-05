import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { CheckoutBookList } from "../types/types";
import { getCheckOutList } from "../services/api";

interface CheckOutListProps {
    refreshTrigger: boolean;
  }

const CheckOutList: React.FC<CheckOutListProps> = ({ refreshTrigger }) => {
  const [checkoutlist, setCheckoutlist] = useState<CheckoutBookList[]>([]);

  const fetchCheckoutList = () => {
    getCheckOutList().then((data) => setCheckoutlist(data));
  };

  useEffect(() => {
    fetchCheckoutList();
  }, [refreshTrigger]); // Re-fetch when refreshTrigger changes


  // Function to convert ISO date string to dd/mm/yyyy
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <Container className="mt-4">
      <h2>CheckOutList</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Book ID</th>
            <th>Student ID</th>
          </tr>
        </thead>
        <tbody>
          {checkoutlist.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{formatDate(data.checkout_date)}</td>
              <td>{data.book}</td>
              <td>{data.student}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CheckOutList;