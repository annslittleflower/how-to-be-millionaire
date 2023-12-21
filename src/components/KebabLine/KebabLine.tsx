import { ReactNode } from 'react';
import styles from './kebab-line.module.css';
import { classnames } from '@/utils/classnames';

type Props = {
  children: ReactNode;
  isActive?: boolean;
};

const KebabLine = ({ isActive, children }: Props) => {
  return (
    <div className={styles.kebab}>
      <div
        // style={{
        //   padding: `0 ${size}rem`,
        // }}
        className={classnames([styles.kebabLine, isActive ? styles.active : ''])}
      />
        {children}
      <div
        // style={{
        //   padding: `0 ${size}rem`,
        // }}
        className={classnames([styles.kebabLine, isActive ? styles.active : ''])}
      />
    </div>

  );
};

export default KebabLine;
