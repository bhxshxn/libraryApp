import styles from '@/styles/Home.module.css';
import Link from 'next/link';
const Header = () => {
   return (
      <div className={styles.header}>
         <Link href='/'>IT Library</Link>
      </div>
   );
};

export default Header;
