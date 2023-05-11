import axios from 'axios';

export const getIssues = async () => {
   const data = await axios.get(`http://localhost:5000/admin/issues`);
   return data.data;
};

export type IssueResponse = Issue[];

export interface Issue {
   _id: string;
   issuerName: string;
   issueDate: string;
   issueStatus: boolean;
   bookId: string;
   bookName: string;
   returnDate: string;
   __v: number;
}
