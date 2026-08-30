import { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <div className={`text-[13px] tracking-[2px] uppercase text-gold font-semibold mb-[18px] ${className}`}>
      {children}
    </div>
  );
}
