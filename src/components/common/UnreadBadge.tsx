import React from 'react';

interface UnreadBadgeProps {
  count: number;
}

export function UnreadBadge({ count }: UnreadBadgeProps) {
  return (
    <span className="bg-blue-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {count}
    </span>
  );
}