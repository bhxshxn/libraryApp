import React, { useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import { useMutation, useQuery } from 'react-query';
import { adminLogin } from '@/api/adminLogn';
import { useCookies } from 'react-cookie';

function login() {
   const [cookies, setCookie, removeCookie] = useCookies(['user']);

   const { mutateAsync } = useMutation(['login'], () =>
      adminLogin({ username: 'admin', password: '123456' }),
   );
   useEffect(() => {
      mutateAsync()
         .then(res => {
            if (res.token) {
               setCookie('user', res.token);
            }
         })
         .catch(err => {
            console.log('err', err);
         });
   }, []);

   return <div>login</div>;
}

export default login;
