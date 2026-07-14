import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id: string;
  hoverEffect?: boolean;
  className?: string;
  key?: string;
}

export default function Card({
  children,
  className = '',
  id,
  hoverEffect = true,
  ...props
}: CardProps) {
  const baseStyle = "rounded-2xl bg-white p-6 border border-gray-100/80 shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300";
  const hoverStyle = hoverEffect ? "hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.08)]" : "";

  return (
    <div
      id={id}
      className={`${baseStyle} ${hoverStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
