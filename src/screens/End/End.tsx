import Button from '@/components/ui/Button';
import formatMoney from '@/utils/formatMoney';
import styles from './end.module.css';

const EndScreen = () => {
  return (
    <div className={styles.end}>
      <img
        className={styles.handImage}
        src='/how-to-be-millionaire/hand.svg'
        alt='hand-icon'
      />
      <div className={styles.textWrapper}>
        <div className={styles.total}>Total score:</div>
        <div className={styles.headerText}>{formatMoney(8000)} earned</div>
        <Button>Try again</Button>
      </div>
    </div>
  );
};

export default EndScreen;
