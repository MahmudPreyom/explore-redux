import React from "react";

interface LogoProps {
  size?: number; // Size of the logo in pixels
  color?: string; // Primary color of the clipboard
  secondaryColor?: string; // Secondary color for the checkmark and accents
  className?: string; // Additional CSS classes
}

const ClipboardCheckLogo: React.FC<LogoProps> = ({
  size = 35,
  color = "#4CAF50", // Default green
  secondaryColor = "#FFFFFF", // Default white
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Clipboard Background */}
      <rect x="12" y="8" width="40" height="48" rx="6" fill={color} />

      {/* Clipboard Header */}
      <rect x="20" y="4" width="24" height="8" rx="2" fill={secondaryColor} />

      {/* Checkmark */}
      <path
        d="M20 34l8 8 16-16"
        stroke={secondaryColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ClipboardCheckLogo;
