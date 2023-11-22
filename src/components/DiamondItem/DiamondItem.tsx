// import { ReactNode } from 'react';
import styles from './diamond-item.module.css';

type Props = {
  isDisabled?: boolean;
  isActive?: boolean;
  isCentered?: boolean;
  hasLongSideHandles?: boolean;
  prefix?: string;
  text: string;
};

const DiamondItem = ({
  // isDisabled = false,
  // children,
  // isActive = false,
  // isCentered = false,
  // hasLongSideHandles = false,
  prefix,
  text,
}: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.inside}>
        {prefix ? <div className={styles.prefix}>{prefix}</div> : null}
        {text}
      </div>
    </div>
  );
};

export default DiamondItem;
