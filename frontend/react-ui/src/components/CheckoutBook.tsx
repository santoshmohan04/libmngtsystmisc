import React, { useState } from "react";
import { Form, Button, Container, Modal } from "react-bootstrap";
import { checkoutBook } from "../services/api";

interface CheckoutBookProps {
  onCheckoutComplete: () => void;  // Callback prop
}

const CheckoutBook: React.FC<CheckoutBookProps> = ({ onCheckoutComplete }) => {
  const [bookId, setBookId] = useState<string>("");
  const [studentId, setStudentId] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure both fields are filled
    if (!bookId || !studentId) {
      setModalMessage("Please fill in both Book ID and Student ID.");
      setShowModal(true);
      return;
    }

    try {
      await checkoutBook({ id: 0, book: Number(bookId), student: Number(studentId) });
      setModalMessage("Book Checked Out Successfully!");
      setShowModal(true);
    } catch (error) {
      setModalMessage("There was an error during checkout.");
      setShowModal(true);
    }
  };

  // Restrict non-numeric input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
    setter(value);
  };

  // Reset bookId and studentId when modal is closed
  const handleCloseModal = () => {
    setShowModal(false);
    setBookId("");  // Reset Book ID
    setStudentId("");  // Reset Student ID
    onCheckoutComplete(); // Notify App.tsx to update the list
  };

  return (
    <Container className="mt-4">
      <h2>Checkout Book</h2>
      <Form onSubmit={handleCheckout}>
        <Form.Group className="mb-3">
          <Form.Label>Book ID</Form.Label>
          <Form.Control
            type="text"
            value={bookId}
            onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>, setBookId)}
            placeholder="Enter Book ID"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Student ID</Form.Label>
          <Form.Control
            type="text"
            value={studentId}
            onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>, setStudentId)}
            placeholder="Enter Student ID"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Checkout
        </Button>
      </Form>

      {/* Modal for success or error messages */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CheckoutBook;