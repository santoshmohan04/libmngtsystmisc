import axios from "axios";
import { Book, Student, CheckoutBook,CheckoutBookList } from "../types/types";

const API_URL = "http://127.0.0.1:8000/api/";

export const getBooks = async (): Promise<Book[]> => {
  const response = await axios.get<Book[]>(`${API_URL}books/`);
  return response.data;
};

export const getStudents = async (): Promise<Student[]> => {
  const response = await axios.get<Student[]>(`${API_URL}students/`);
  return response.data;
};

export const checkoutBook = async (data: CheckoutBook): Promise<void> => {
  await axios.post(`${API_URL}checkedout/`, data);
};

export const getCheckOutList = async (): Promise<CheckoutBookList[]> => {
  const response = await axios.get<CheckoutBookList[]>(`${API_URL}checkedout/`);
  return response.data;
};