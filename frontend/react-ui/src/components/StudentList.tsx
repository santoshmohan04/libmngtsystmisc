import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { Student } from "../types/types";
import { getStudents } from "../services/api";

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    getStudents().then((data) => setStudents(data));
  }, []);

  return (
    <Container className="mt-4">
      <h2>Students</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
        {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default StudentList;