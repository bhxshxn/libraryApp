import { Issue, getIssues } from '@/api/getIssues';
import { returnBook } from '@/api/returnBook';
import ProtectedComponent from '@/components/protectedRoute';
import Link from 'next/link';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import styles from '@/styles/Home.module.css';
import Loader from '@/components/Loader';
import { useRouter } from 'next/router';
import axios from 'axios';
import Header from '@/components/Header';

function issues() {
   const router = useRouter();
   const {
      isLoading,
      data: issuesData,
      error: issuesError,
   } = useQuery(['issues'], () => getIssues());
   const [bookId, setBookId] = useState('');
   const [id, setId] = useState('');
   const { mutateAsync } = useMutation(['return'], () =>
      returnBook({ BookId: bookId, id }),
   );

   const returnABook = async (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      bookId: string,
      id: string,
   ) => {
      console.log('tret', id, bookId);
      e.preventDefault();
      axios
         .post(`http://localhost:5000/admin/returnBook`, {
            id: id,
            bookId: bookId,
         })
         .then(res => {
            router.reload();
         });
   };
   return (
      <ProtectedComponent>
         <div className='min-h-screen'>
            <Header />
            {isLoading ? (
               <Loader />
            ) : (
               <div className={styles.booksTable}>
                  <table className={styles.table}>
                     <thead>
                        <tr>
                           <th className={styles.th}>Sr.No</th>
                           <th className={styles.th}>Issuer Name</th>
                           <th className={styles.th}>Issue Date</th>
                           <th className={styles.th}>Issue Status</th>
                           <th className={styles.th}>Book ID</th>
                           <th className={styles.th}>Book Name</th>
                           <th className={styles.th}>Return Date</th>
                           <th className={styles.th}>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {issuesData?.map((val: Issue, key: number) => {
                           return (
                              <tr key={key}>
                                 <td className={styles.td}>{key + 1}</td>
                                 <td className={styles.td}>{val.issuerName}</td>
                                 <td className={styles.td}>{val.issueDate}</td>
                                 <td className={styles.td}>
                                    {val.issueStatus
                                       ? 'Not retured'
                                       : 'Returned'}
                                 </td>
                                 <td className={styles.td}>{val.bookId}</td>
                                 <td className={styles.td}>{val.bookName}</td>
                                 <td className={styles.td}>{val.returnDate}</td>
                                 <td className={styles.td}>
                                    {val.issueStatus ? (
                                       <button
                                          onClick={e => {
                                             returnABook(
                                                e,
                                                val.bookId,
                                                val._id,
                                             );
                                          }}
                                       >
                                          Return
                                       </button>
                                    ) : (
                                       <span>-</span>
                                    )}
                                 </td>
                              </tr>
                           );
                        })}
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      </ProtectedComponent>
   );
}

export default issues;
