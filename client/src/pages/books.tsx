import { Book, getBooks } from '@/api/getBook';
import Header from '@/components/Header';
import MobileListItem from '@/components/MobileListItem';
import styles from '@/styles/Home.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';

const Books = () => {
 const {
  isLoading,
  data: books,
  error: booksError,
 } = useQuery('books', getBooks);

 console.log('data', books);
 if (isLoading) return <div>Loading</div>;
 return (
  <>
   <Header />
   <main className={styles.booksContainer}>
    <input
     className={styles.searchBar}
     placeholder="Search for Book using Title"
    />
    {books.map((item: Book) => (
     <MobileListItem
      id={item._id}
      author={item.author}
      title={item.title}
      isbn={item.accNo}
      key={item._id}
     />
    ))}
   </main>
  </>
 );
};

export default Books;
