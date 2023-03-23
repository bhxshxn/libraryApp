import styles from '@/styles/Home.module.css';

const Loader = () => {
 return (
  <div
   style={{
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
   }}
  >
   <div className={styles.loader}></div>
   <span>Loading...</span>
  </div>
 );
};
export default Loader;
