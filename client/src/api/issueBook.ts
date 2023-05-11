import axios from 'axios';

export interface loginProps {
   issuerName: String;
   bookId: String;
   bookName: String;
}
export const issueABook = async (props: loginProps) => {
   const data = await axios.post(`http://localhost:5000/admin/issueBook`, {
      issuerName: props.issuerName,
      bookId: props.bookId,
      bookName: props.bookName,
   });
   return data.data;
};
