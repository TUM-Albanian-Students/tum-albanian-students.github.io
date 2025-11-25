import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'outline', 
  size = 'md',
  className, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center gap-2 rounded-full font-medium transition-all duration-300 group";
  
  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm"
  };

  const variants = {
    outline: "border border-gray-300 text-gray-800 hover:border-albanian-red hover:text-albanian-red bg-white",
    primary: "bg-albanian-red text-white border border-albanian-red hover:bg-red-700",
    ghost: "text-gray-600 hover:text-albanian-red pl-0 hover:pl-2"
  };

  return (
    <button 
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      {children}
      <ChevronRight className={`transition-transform duration-300 group-hover:translate-x-1 ${size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'}`} />
    </button>
  );
};