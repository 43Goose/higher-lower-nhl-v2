import React, { ButtonHTMLAttributes } from 'react'

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

export default function Button({
  children,
  variant,
  ...props
}: {
  children: React.ReactNode;
  variant: 'outlined' | 'contained';
  props?: ButtonProps
}) {

  const outlinedStyles = 'text-sec border-2 hover:bg-opacity-10';
  const containedStyles = 'bg-sec';
  const defaultStyles = 'hover:bg-opacity-50';
  const variantStyles = variant === 'outlined' ? outlinedStyles : variant === 'contained' ? containedStyles : defaultStyles;

  return (
    <button
      className={`w-full rounded-full font-bold p-3 transition-colors hover:bg-cyan-600 active:scale-95 ${variantStyles}`}
      {...props}
    >
      {children}
    </button>
  )
}
