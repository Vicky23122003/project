import React from 'react';

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg';
}

export function Avatar({ size = 'md' }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full bg-gray-600`} />
  );
}