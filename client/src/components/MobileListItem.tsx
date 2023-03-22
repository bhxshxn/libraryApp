import styles from '@/styles/Home.module.css';
import Link from 'next/link';
interface propsType {
 title: string;
 isbn: number;
 author: string;
 count?: string;
 id: string;
}

const MobileListItem = (props: propsType) => {
 return (
  <Link
   href={`/singleBook/${props.id}`}
   className={styles.link}
  >
   <div className={styles.listItemContainer}>
    <div className={styles.titleBox}>
     <div>Name: {props.title}</div>
     <div>ISBN: {props.isbn}</div>
    </div>
    <div style={{ marginTop: '3px' }}>By: {props.author}</div>
    <div style={{ marginTop: '3px' }}>No of Copies: {props.count || 'NA'}</div>
   </div>
  </Link>
 );
};

export default MobileListItem;
