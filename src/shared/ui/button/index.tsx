import classNames from 'classnames';
import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  forwardRef,
  ForwardedRef,
} from 'react';
import style from './styles.module.scss';

type ButtonStyle = 'primary';

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
      className={classNames(style.btn, {
        [style.primary]: buttonStyle === 'primary',
      })}
    >
      {restProps.children}
    </button>
  );
};

export default forwardRef(Button);
