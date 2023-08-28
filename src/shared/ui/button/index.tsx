import classNames from 'classnames';
import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  forwardRef,
  ForwardedRef,
} from 'react';
import style from './styles.module.scss';

export type ButtonStyle = 'primary' | 'orange';

const Button = (
  {
    buttonStyle = 'primary',
    ...restProps
  }: {
    buttonStyle?: ButtonStyle;
  } & DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <button
      {...restProps}
      ref={ref}
      className={classNames(style.btn, style[buttonStyle])}
    >
      {restProps.children}
    </button>
  );
};

export default forwardRef(Button);
