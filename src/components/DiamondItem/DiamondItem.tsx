import styles from './diamond-item.module.css';
import { classnames } from '@/utils/classnames';

type Props = {
  isDisabled?: boolean;
  isActive?: boolean;
  isCentered?: boolean;
  prefix?: string;
  text: string;
  size?: 'small' | 'big';
};

const DiamondItem = ({
  isDisabled = false,
  isActive = false,
  prefix,
  text,
  size = 'big',
}: Props) => {
  return (
    <div
      className={classnames([
        styles.item,
        styles[size],
        isActive ? styles.active : '',
        isDisabled ? styles.disabled : '',
      ])}
    >
      <div className={styles.inside}>
        {prefix ? <div className={styles.prefix}>{prefix}</div> : null}
        {text}
      </div>
    </div>
  );
};

export default DiamondItem;
