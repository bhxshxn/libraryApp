import { getSingleBook } from '@/api/singleBook';
import FullScreenLoader from '@/components/FullScreenLoader';
import Header from '@/components/Header';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

const SingleBook = () => {
   const router = useRouter();
   const { id } = router.query;

   const { isLoading, data: book } = useQuery(['singleBook', id], () =>
      getSingleBook(id),
   );
   console.log('books', book);

   if (isLoading) return <FullScreenLoader />;
   return (
      <>
         <Header />
         <main className={styles.singleBookContainer}>
            <div className={styles.singleBookTitle}>
               <span>Name: {book[0].title}</span>
               <span>ISBN: {book[0].accNo}</span>
            </div>
            <div style={{ marginTop: '3px' }}>Publish Year: {book[0].year}</div>
            <div style={{ marginTop: '3px' }}>Author: {book[0].author}</div>
            <div style={{ marginTop: '3px' }}>
               Publisher: {book[0].publisher}
            </div>
            <div style={{ marginTop: '3px' }}>
               Edition: 3<sup>rd</sup>
            </div>
            <div style={{ marginTop: '3px' }}>No of Copies: 3</div>
            <div style={{ marginTop: '15px' }}>
               {book[0].available ? (
                  <span
                     style={{
                        padding: '10px',
                        backgroundColor: '#028542',
                        color: 'white',
                     }}
                  >
                     Available
                  </span>
               ) : (
                  <span
                     style={{
                        padding: '10px',
                        backgroundColor: 'red',
                        color: 'white',
                     }}
                  >
                     Issued
                  </span>
               )}
            </div>
         </main>
      </>
   );
};

export default SingleBook;
