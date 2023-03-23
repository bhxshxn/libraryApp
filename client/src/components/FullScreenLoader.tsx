import styles from '@/styles/Home.module.css';

const FullScreenLoader = () => {
 return (
  <div
   style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
   }}
  >
   <div style={{ display: 'flex' }}>
    <div className={styles.loader}></div>
    <span>Loading...</span>
   </div>
  </div>
 );
};
export default FullScreenLoader;
