import React, { useEffect, useState } from 'react';
import { Building2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'Graves Cleaning & Property Management',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#14263B] via-[#1C334D] to-[#147D68]/80 text-[#FAF9F5] p-6 text-center ${className}`}
      >
        <Building2 className="w-8 h-8 text-[#C5A47A] mb-3" strokeWidth={1.5} aria-hidden="true" />
        <p className="font-editorial text-lg font-medium tracking-tight max-w-xs">{fallbackTitle}</p>
        <p className="text-xs text-[#FAF9F5]/75 mt-1">Edmond &amp; Oklahoma City Metro</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
