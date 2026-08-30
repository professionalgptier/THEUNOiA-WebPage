import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
}

export default function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const baseStyles = 'rounded-full transition-all duration-300 inline-flex items-center justify-center font-semibold px-8 py-4';
  
  const variants = {
    primary: 'bg-gold text-navy-deep hover:brightness-110',
    ghost: 'bg-transparent text-ivory border border-ivory/35 hover:border-gold hover:text-gold'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
