import axios from 'axios';

export const getBooks = async () => {
 const data = await axios.get('http://localhost:5000/');
 return data.data;
};

export type BookReponse = Book[];

export interface Book {
 _id: string;
 accNo: number;
 author: string;
 title: string;
 price?: string;
 year: string;
 place: string;
 pages: number;
 subject: string;
 semester: string;
 __v: number;
}
