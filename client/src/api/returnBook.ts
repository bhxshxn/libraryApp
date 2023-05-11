import axios from 'axios';

export interface loginProps {
   id: String;
   BookId: String;
}
export const returnBook = async (props: loginProps) => {
   console.log('id', props);

   const data = await axios.post(`http://localhost:5000/admin/returnBook`, {
      id: props.id,
      bookId: props.BookId,
   });
   return data.data;
};
