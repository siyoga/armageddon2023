import styles from './page.module.css';
import Selector from '@/components/ui/Selector/Selector';
import AsteroidFeed from '@/components/ui/AsteroidFeed/AsteroidFeed';
import Cart from '@/components/ui/Cart/Cart';

export default function Home() {
  return (
    <>
      <div className={styles.feed}>
        <h1 className={styles.title}>Ближайшие подлёты астероидов</h1>
        <Selector />
        <AsteroidFeed />
      </div>

      <Cart />
    </>
  );
}
