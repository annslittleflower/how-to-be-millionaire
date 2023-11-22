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
        <div className={styles.headerText}>Who wants to be a millionaire?</div>
        <Button>Start</Button>
      </div>
    </div>
  );
};

export default StartScreen;
