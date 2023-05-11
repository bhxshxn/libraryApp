import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { adminLogin } from '@/api/adminLogn';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

function login() {
   const [cookies, setCookie, removeCookie] = useCookies(['user']);
   const router = useRouter();

   const { mutateAsync } = useMutation(['login'], () =>
      adminLogin({ username: email, password: passw.toString() }),
   );

   const [email, setEmail] = useState('');
   const [passw, setPassw] = useState('');
   const submitThis = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      mutateAsync()
         .then(res => {
            if (res.token) {
               setCookie('user', res.token);
               router.push('/admin/issues');
            }
         })
         .catch(err => {
            console.log('err', err);
         });
   };
   return (
      <div className='flex flex-col min-h-screen'>
         <div className='flex-grow flex justify-center items-center flex-col'>
            <div className='flex flex-col w-[30%] justify-center items-center'>
               <div className='flex flex-col w-[80%] bg-[#c2fffb] px-12 py-6 justify-center items-center rounded-md'>
                  <div className='py-2 flex flex-start flex-col w-full'>
                     <h2 className='text-2xl'>Please Login</h2>
                     <span className='text-[#eb2929] mb-2 text-sm'>
                        *All fields are required.
                     </span>
                  </div>
                  <div className='py-1'>
                     <input
                        type='text'
                        className='py-2 bg-white my-3 w-full px-2 outline-none rounded-md'
                        placeholder='Username'
                        required
                        onChange={e => {
                           setEmail(e.target.value);
                        }}
                     />
                     <input
                        type='password'
                        className='py-2 bg-white my-3 w-full px-2 outline-none rounded-md'
                        placeholder='Password'
                        required
                        onChange={e => {
                           setPassw(e.target.value);
                        }}
                     />
                  </div>
                  <button
                     onClick={e => {
                        submitThis(e);
                     }}
                     className='bg-[#1a4fff] w-full py-2 my-3 rounded-md text-white text-lg'
                  >
                     Login
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default login;
