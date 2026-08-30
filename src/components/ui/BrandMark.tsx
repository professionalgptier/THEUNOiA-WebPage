interface BrandMarkProps {
  variant?: 'navy' | 'ivory';
  className?: string;
}

export default function BrandMark({ variant = 'navy', className = '' }: BrandMarkProps) {
  const colorClass = variant === 'navy' ? 'text-navy' : 'text-ivory';
  
  return (
    <div className={`font-head font-semibold text-[40px] leading-none ${colorClass} ${className}`}>
      oia
    </div>
  );
}
