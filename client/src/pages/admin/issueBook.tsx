import ProtectedComponent from '@/components/protectedRoute';
import React from 'react';

function issueBook() {
   return (
      <ProtectedComponent>
         <div>issueBook</div>;
      </ProtectedComponent>
   );
}

export default issueBook;
