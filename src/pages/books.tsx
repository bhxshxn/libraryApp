import Header from '@/components/Header';
import MobileListItem from '@/components/MobileListItem';
import styles from '@/styles/Home.module.css';

const Books = () => {
 return (
  <>
   <Header />
   <main className={styles.booksContainer}>
    <input
     className={styles.searchBar}
     placeholder="Search for Book using Title"
    />
    <MobileListItem />
    <MobileListItem />
    <MobileListItem />
    <MobileListItem />
    <MobileListItem />
    <MobileListItem />
    <MobileListItem />
    <MobileListItem />
    <MobileListItem />
    <MobileListItem />
    <MobileListItem />
    <MobileListItem />
    <MobileListItem />
    <MobileListItem />
    <MobileListItem />
   </main>
  </>
 );
};

export default Books;
