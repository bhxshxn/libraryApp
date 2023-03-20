import Header from '@/components/Header';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';

const SingleBook = () => {
 const router = useRouter();
 const { id } = router.query;

 return (
  <>
   <Header />
   <main className={styles.singleBookContainer}>
    <div className={styles.singleBookTitle}>
     <span>Name: Harry Potter</span>
     <span>ISBN: 54321</span>
    </div>
    <div style={{ marginTop: '3px' }}>Publish Year: 2020</div>
    <div style={{ marginTop: '3px' }}>Author: J.K Rowling</div>
    <div style={{ marginTop: '3px' }}>Publisher: London Publish House</div>
    <div style={{ marginTop: '3px' }}>
     Edition: 3<sup>rd</sup>
    </div>
    <div style={{ marginTop: '3px' }}>No of Copies: 3</div>
   </main>
  </>
 );
};

export default SingleBook;
