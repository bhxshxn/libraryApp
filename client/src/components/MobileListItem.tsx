import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const MobileListItem = () => {
 return (
  <Link
   href={`/singleBook/1`}
   className={styles.link}
  >
   <div className={styles.listItemContainer}>
    <div className={styles.titleBox}>
     <div>Name: Harry Potter</div>
     <div>ISBN: 54321</div>
    </div>
    <div style={{ marginTop: '3px' }}>By: J.K Rowling</div>
    <div style={{ marginTop: '3px' }}>No of Copies: 3</div>
   </div>
  </Link>
 );
};

export default MobileListItem;
