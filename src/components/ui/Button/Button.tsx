import { ComponentPropsWithoutRef } from 'react';
import { classnames } from '@/utils/classnames';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

const Button = ({
  children,
  className,
  type = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classnames([className])}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
