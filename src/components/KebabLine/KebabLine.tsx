import { ReactNode } from 'react';
import styles from './kebab-line.module.css';
import { classnames } from '@/utils/classnames';

type Props = {
  size: number;
  children: ReactNode;
  isActive?: boolean;
};

const KebabLine = ({ size, isActive, children }: Props) => {
  return (
    <div
      style={{
        padding: `${size}rem`,
      }}
      className={classnames([styles.kebabLine, isActive ? styles.active : ''])}
    >
      {children}
    </div>
  );
};

export default KebabLine;
