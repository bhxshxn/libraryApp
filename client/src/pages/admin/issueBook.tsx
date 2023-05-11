import ProtectedComponent from '@/components/protectedRoute';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { issueABook } from '@/api/issueBook';
import Header from '@/components/Header';

function issueBook() {
   const [issuerName, setIssuerName] = useState('');
   const router = useRouter();

   const { bookId, bookName } = router.query;
   const { mutateAsync } = useMutation(['issue'], () =>
      issueABook({
         bookId: bookId?.toString() ?? '',
         bookName: bookName?.toString() ?? '',
         issuerName: issuerName,
      }),
   );

   const submitThis = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      mutateAsync()
         .then(res => {
            router.push('/admin/issues');
         })
         .catch();
   };
   return (
      <ProtectedComponent>
         <div className='flex flex-col h-[96vh]'>
            <Header />
            <div className='flex-grow flex justify-center items-center flex-col'>
               <div className='flex flex-col w-[30%] justify-center items-center'>
                  <div className='flex flex-col w-[80%] bg-[#c2fffb] px-12 py-6 justify-center items-center rounded-md'>
                     <div className='py-2 flex flex-start flex-col w-full'>
                        <h2 className='text-2xl'>Issue a book</h2>
                        <span className='text-[#eb2929] mb-2 text-sm'>
                           *All fields are required.
                        </span>
                     </div>
                     <div className='py-1'>
                        <input
                           type='text'
                           className='py-2 bg-white my-3 w-full px-2 outline-none rounded-md'
                           placeholder='Issuer Name'
                           required
                           onChange={e => {
                              setIssuerName(e.target.value);
                           }}
                        />
                     </div>
                     <button
                        onClick={e => {
                           submitThis(e);
                        }}
                        className='bg-[#1a4fff] w-full py-2 my-3 rounded-md text-white text-lg'
                     >
                        Issue Book
                     </button>
                  </div>
               </div>
            </div>
         </div>
         ;
      </ProtectedComponent>
   );
}

export default issueBook;
