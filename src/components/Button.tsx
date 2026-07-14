import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'yellow' | 'accent' | 'outline-white' | 'solid-white';
  children: React.ReactNode;
  id: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  id,
  type = 'button',
  onClick,
  ...props
}: ButtonProps) {
  const baseStyle = "px-6 py-3 font-semibold rounded-lg text-sm tracking-wider uppercase transition-all duration-300 transform active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer";
  
  let variantStyle = '';
  switch (variant) {
    case 'primary':
      variantStyle = "bg-primary hover:bg-primary-dark text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg";
      break;
    case 'secondary':
      variantStyle = "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-colors";
      break;
    case 'dark':
      variantStyle = "bg-dark-inverse hover:bg-dark-inverse-alt text-dark-text shadow-md hover:-translate-y-0.5 hover:shadow-lg";
      break;
    case 'yellow':
      variantStyle = "bg-accent-yellow hover:bg-accent-yellow-container text-text-primary shadow-sm hover:-translate-y-0.5 hover:shadow-md font-bold";
      break;
    case 'outline-white':
      variantStyle = "border-2 border-white text-white hover:bg-white hover:text-primary hover:-translate-y-0.5 transition-all";
      break;
    case 'solid-white':
      variantStyle = "bg-white text-primary hover:bg-bg-nest shadow-md hover:-translate-y-0.5 hover:shadow-lg";
      break;
    default:
      variantStyle = "bg-primary hover:bg-primary-dark text-white";
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
