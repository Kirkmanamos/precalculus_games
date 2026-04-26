import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: 'bg-accent text-white',
  secondary: 'bg-secondary text-white',
  tertiary: 'bg-tertiary text-ink',
  quaternary: 'bg-quaternary text-ink',
  ghost: 'bg-white text-ink',
  danger: 'bg-rose-brand text-white',
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-2xl',
};

/**
 * Candy button — pill-shaped, thick border, hard shadow, tactile press.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      leadingIcon,
      trailingIcon,
      className = '',
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={[
          'inline-flex items-center justify-center gap-2',
          'rounded-full border-2 border-ink font-display font-bold',
          'shadow-sticker',
          'transition-transform duration-100 ease-out',
          'hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-sticker-lg',
          'active:translate-x-1 active:translate-y-1 active:shadow-sticker-press',
          'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40',
          'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-sticker',
          'select-none whitespace-nowrap',
          VARIANT_CLASSES[variant],
          SIZE_CLASSES[size],
          className,
        ].join(' ')}
        {...rest}
      >
        {leadingIcon && <span className="text-current">{leadingIcon}</span>}
        <span>{children}</span>
        {trailingIcon && <span className="text-current">{trailingIcon}</span>}
      </button>
    );
  },
);
Button.displayName = 'Button';
