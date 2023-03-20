import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ['latin'] });
import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
 const router = useRouter();
 return (
  <>
   <Header />
   <main className={styles.main}>
    <div>
     <p className={styles.heading}>Welcome to IT library</p>
    </div>
    <Link href="/books">
     <button className={styles.button}>Let's Read some books</button>
    </Link>
   </main>
  </>
 );
}
