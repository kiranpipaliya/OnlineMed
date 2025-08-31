import React from 'react';

interface SpinnerLoaderProps {
  className?: string; // allow passing custom classes
  size?: number;      // optional size in pixels
}

const SpinnerLoader: React.FC<SpinnerLoaderProps> = ({ className = '', size = 24 }) => {
  return (
    <>
      <style>
        {`
          @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
          }

          .animate-spin-custom {
              animation: spin 1.5s linear infinite;
          }
        `}
      </style>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={`animate-spin-custom ${className}`}
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="url(#paint0_radial_6_3052)"
          strokeWidth="4"
        />
        <defs>
          <radialGradient
            id="paint0_radial_6_3052"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(12 0.5) rotate(90) scale(24)"
          >
            <stop stopColor="var(--color-primary)" />
            <stop offset="1" stopColor="white" />
          </radialGradient>
        </defs>
      </svg>
    </>
  );
};

export default SpinnerLoader;
