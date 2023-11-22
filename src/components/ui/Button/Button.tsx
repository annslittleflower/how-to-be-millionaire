import { ComponentPropsWithoutRef } from 'react';
import { classnames } from '@/utils/classnames';

import styles from './button.module.css';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

const Button = ({
  children,
  className,
  type = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classnames([styles.button, className])}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
