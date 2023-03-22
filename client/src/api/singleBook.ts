import axios from 'axios';

export const getSingleBook = async (id: any) => {
 console.log('id', id);

 const data = await axios.post('http://localhost:5000/singleBook', { id: id });
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
