import { Book, getBooks } from '@/api/getBook';
import Header from '@/components/Header';
import FullScreenLoader from '@/components/FullScreenLoader';
import MobileListItem from '@/components/MobileListItem';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '@/components/Loader';

const Books = () => {
   const [search, setSearch] = useState('');
   const {
      isLoading,
      data: books,
      error: booksError,
   } = useQuery(['books', search], () => getBooks(search));

   return (
      <>
         <Header />
         <main className={styles.booksContainer}>
            <input
               className={styles.searchBar}
               placeholder='Search for Book using Title'
               onChange={e => {
                  setSearch(e.target.value);
               }}
               value={search}
            />

            {isLoading ? (
               <Loader />
            ) : (
               books.map((item: Book) => (
                  <MobileListItem
                     id={item._id}
                     author={item.author}
                     title={item.title}
                     isbn={item.accNo}
                     key={item._id}
                  />
               ))
            )}
         </main>
      </>
   );
};

export default Books;
