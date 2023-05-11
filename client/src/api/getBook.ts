import axios from "axios";

export const getBooks = async (searchText: string) => {
  const data = await axios.post(`http://localhost:3100/book`, {
    search: searchText,
  });
  console.log("log", data.data);

  return data.data;
};

export type BookReponse = Book[];

export interface Book {
  _id: string;
  accNo: number;
  author: string;
  title: string;
  price?: string;
  year?: string;
  publisher?: string;
  place?: string;
  pages?: number;
  subject?: string;
  semester?: string;
  available: boolean;
  __v: number;
  dateOfAcc?: string;
  billNo?: string;
  count?: number;
  vendor?: string;
}
