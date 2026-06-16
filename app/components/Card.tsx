import type { ReactNode } from 'react';

export function Card({
  children,
  className = '',
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={`rounded-lg border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/80 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
