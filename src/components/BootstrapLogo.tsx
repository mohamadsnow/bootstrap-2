import React from 'react';

interface BootstrapLogoProps {
  size?: number;
  className?: string;
}

export const BootstrapLogo: React.FC<BootstrapLogoProps> = ({
  size = 36,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 118 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Bootstrap Logo"
    >
      <defs>
        <linearGradient id="bs-logo-grad" x1="0" y1="0" x2="118" y2="94" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.509 0C17.073 0 11.213 5.915 11.213 13.149V80.851C11.213 88.085 17.073 94 24.509 94H93.491C100.927 94 106.787 88.085 106.787 80.851V13.149C106.787 5.915 100.927 0 93.491 0H24.509ZM47.145 71.351H63.562C74.084 71.351 80.335 66.203 80.335 57.62C80.335 51.031 75.774 46.178 68.798 45.286V44.918C73.927 43.914 77.674 39.462 77.674 33.767C77.674 26.373 71.908 21.849 62.668 21.849H47.145V71.351ZM55.021 28.458H61.551C66.968 28.458 69.927 30.893 69.927 35.148C69.927 39.591 66.666 42.198 60.531 42.198H55.021V28.458ZM55.021 64.742V48.56H62.382C69.035 48.56 72.426 51.168 72.426 56.609C72.426 62.05 68.938 64.742 62.382 64.742H55.021Z"
        fill="url(#bs-logo-grad)"
      />
    </svg>
  );
};
