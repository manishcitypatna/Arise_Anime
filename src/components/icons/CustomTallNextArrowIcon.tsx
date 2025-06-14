import type React from 'react';

const CustomTallNextArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="12" // Intrinsic width for aspect ratio calculation
    height="44" // Intrinsic height for aspect ratio calculation
    viewBox="0 0 12 44" // Defines the coordinate system for the path
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // className will be applied here for sizing
  >
    {/* New, simpler path for a filled tall chevron */}
    <path
      d="M2 2 L10 22 L2 42 L4 42 L12 22 L4 2 Z"
      fill="currentColor" // Inherits color from parent's text color (e.g., text-white)
    />
  </svg>
);

export default CustomTallNextArrowIcon;
