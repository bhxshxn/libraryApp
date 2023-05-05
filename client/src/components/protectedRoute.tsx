import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export interface ProtectedComponentProps {
   children: any;
}

const ProtectedComponent: React.FC<ProtectedComponentProps> = props => {
   const [isAuthorized, setIsAuthorized] = useState<boolean>();
   const [cookies, setCookie, removeCookie] = useCookies(['user']);
   useEffect(() => {
      if (cookies.user == 'admin@123') {
         setIsAuthorized(true);
      } else {
         setIsAuthorized(false);
      }
   }, [cookies]);
   useEffect(() => {
      console.log('Cookies: ', cookies.user);
   }, [cookies]);
   return <>{isAuthorized ? props.children : <p>not authorized</p>}</>;
};

export default ProtectedComponent;
