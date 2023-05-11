import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';
import { useQuery } from 'react-query';
import { Book, getBooks } from '@/api/getBook';
import Loader from '@/components/Loader';
import Link from 'next/link';
import ProtectedComponent from '@/components/protectedRoute';
import Header from '@/components/Header';

function books() {
   const [search, setSearch] = useState('');
   const {
      isLoading,
      data: books,
      error: booksError,
   } = useQuery(['books', search], () => getBooks(search));
   return (
      <ProtectedComponent>
         <Header />
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
            <div className={styles.tableContainer}>
               <div className={styles.booksTable}>
                  <table className={styles.table}>
                     <thead>
                        <tr>
                           <th className={styles.th}>Sr.No</th>
                           <th className={styles.th}>Book Id</th>
                           <th className={styles.th}>Book Name</th>
                           <th className={styles.th}>Book Author</th>
                           <th className={styles.th}>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {books.map((val: Book, key: number) => {
                           return (
                              <tr key={key}>
                                 <td className={styles.td}>{key + 1}</td>
                                 <td className={styles.td}>{val.accNo}</td>
                                 <td className={styles.td}>{val.title}</td>
                                 <td className={styles.td}>{val.author}</td>
                                 <td className={styles.td}>
                                    <Link
                                       href={{
                                          pathname: '/admin/issueBook',
                                          query: {
                                             bookId: val.accNo,
                                             bookName: val.title,
                                          },
                                       }}
                                    >
                                       Issue
                                    </Link>
                                 </td>
                              </tr>
                           );
                        })}
                     </tbody>
                  </table>
               </div>
            </div>
         )}
      </ProtectedComponent>
   );
}

export default books;
