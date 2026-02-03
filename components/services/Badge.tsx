import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'popular' | 'featured';
}

export default function Badge({ children, variant = 'popular' }: BadgeProps) {
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-xs";
  const variantClasses = {
    popular: "bg-white text-[#0066FF] border-2 border-[#0066FF] font-bold",
    featured: "bg-[#0066FF]/20 text-[#0066FF] border border-[#0066FF]/30 font-semibold"
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}

