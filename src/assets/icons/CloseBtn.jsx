import propTypes from "prop-types";
export const CloseBtn = ({ strokeWidth }) => {
  return (
    <svg
      width="32.000000"
      height="32.000000"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip4_589">
          <rect
            id="x"
            width="32.000000"
            height="32.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="x"
        width="32.000000"
        height="32.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip4_589)">
        <path
          id="Vector"
          d="M24 8L8 24"
          stroke="#121417"
          strokeOpacity="1.000000"
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          id="Vector"
          d="M8 8L24 24"
          stroke="#121417"
          strokeOpacity="1.000000"
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

CloseBtn.propTypes = {
  strokeWidth: propTypes.string.isRequired,
};
