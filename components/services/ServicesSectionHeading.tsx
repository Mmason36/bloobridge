import React from 'react';

interface ServicesSectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function ServicesSectionHeading({ title, subtitle }: ServicesSectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-sm md:text-base mb-3 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-0.5 bg-gradient-to-r from-[#0066FF] via-[#0066FF]/50 to-transparent"></div>
    </div>
  );
}

