
import type React from 'react';

const CustomTallPrevArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="12" // Intrinsic width for aspect ratio calculation
    height="44" // Intrinsic height for aspect ratio calculation
    viewBox="0 0 12 44" // Defines the coordinate system for the path
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // className will be applied here for sizing
  >
    {/* Mirrored path of CustomTallNextArrowIcon */}
    <path
      d="M10 2 L2 22 L10 42 L8 42 L0 22 L8 2 Z"
      fill="currentColor" // Inherits color from parent's text color (e.g., text-white)
    />
  </svg>
);

export default CustomTallPrevArrowIcon;
