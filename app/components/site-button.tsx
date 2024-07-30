import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonProps = {
    children: React.ReactNode,
    variant?: 'outlined' | 'contained'
}

export default function Button({
    children,
    variant,
    ...props
}: ButtonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>) {

    const outlinedStyles = 'text-sec border-2 hover:bg-opacity-10';
    const containedStyles = 'bg-sec';
    const defaultStyles = 'hover:bg-opacity-50';
    const variantStyles = variant === 'outlined' ? outlinedStyles : variant === 'contained' ? containedStyles : defaultStyles;

    return (
        <a
            className={`block w-full rounded-full font-bold p-3 text-center transition-colors hover:bg-cyan-600 hover:cursor-pointer active:scale-95 ${variantStyles}`}
            {...props}
        >
            {children}
        </a>
    )
}