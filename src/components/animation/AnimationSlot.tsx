'use client';

import { ReactNode } from 'react';

interface AnimationSlotProps {
  id: string;
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
}

export default function AnimationSlot({ id, children, className = '', fallback }: AnimationSlotProps) {
  return (
    <div data-animation-slot={id} className={className}>
      {children}
    </div>
  );
}
