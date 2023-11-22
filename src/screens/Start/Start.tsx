import Button from '@/components/ui/Button';
import styles from './start.module.css';

const StartScreen = () => {
  return (
    <div className={styles.start}>
      <img
        className={styles.handImage}
        src='/how-to-be-millionaire/hand.svg'
        alt='hand-icon'
      />

      <div className={styles.textWrapper}>
        <h1 className={styles.headerText}>Who wants to be a millionaire?</h1>
        <Button>hello</Button>
      </div>
    </div>
  );
};

export default StartScreen;
