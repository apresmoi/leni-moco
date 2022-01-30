import * as React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

export function Button(props: ButtonProps) {
  return (
    <svg onClick={props.onClick} className="green-button" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 429 144">
      <defs>
        <radialGradient id="a" cx="-742.61" cy="608.54" r="1" gradientTransform="matrix(312.16 0 0 -104.78 232027.95 63835.14)" gradientUnits="userSpaceOnUse">
          <stop offset=".28" stop-color="#5ca132"/>
          <stop offset="1" stop-color="#6eb52c"/>
        </radialGradient>
        <linearGradient id="b" x1="266.13" y1="265.42" x2="185.51" y2="-33.48" gradientTransform="matrix(1 0 0 -1 0 146)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#19642d"/>
          <stop offset=".26" stop-color="#5ca132"/>
          <stop offset="1" stop-color="#19642d"/>
        </linearGradient>
      </defs>
      <path d="M0 5.71A5.71 5.71 0 0 1 5.71 0h77.12l9.43 1.15a1.82 1.82 0 0 0 .33 0L102.89 0h320.4A5.71 5.71 0 0 1 429 5.71v111.58c0 1.88-1 3.72-1.5 5.55a5.78 5.78 0 0 0-.14.7 4.56 4.56 0 0 0 .2 2.17c.55 1.59 1.44 3.16 1.44 4.84v7.74a5.71 5.71 0 0 1-5.71 5.71H5.71A5.71 5.71 0 0 1 0 138.29Z" fill="url(#a)"/>
      <rect x="11.51" y="11.45" width="405.99" height="121.09" rx="5.71" fill="url(#b)"/>
      <path d="M10.07 57.73C25 48.26 25.92 73 37.33 90.75s58.19 27.91 39 42.13c-45.73 2-56.43 11.17-67.45-4.49A6.58 6.58 0 0 1 7.7 125C6.64 101.17 5 61 10.07 57.73Z" fill="#4d4646" fill-opacity=".22"/>
      <path d="M19.53 86.14c8.15-5.18 8.66 8.32 14.9 18s31.81 15.26 21.29 23c-24.29 1.07-30.5 5.82-36.36-1.77A5.93 5.93 0 0 1 18.2 122c-.58-13.09-1.39-34.17 1.33-35.9Z" fill="#4d4646" fill-opacity=".22"/>
      <path d="M409.83 59c-8.37 4.81-8.28-8.69-14.08-18.7s-31.1-16.64-20.24-23.94c25.81 0 31.45-5 37.25 5 0 12.81 0 35.95-2.93 37.64Z" fill="#fff" fill-opacity=".22"/>
      <path d="M406 18c0 1.2-1.05.58-2.34.58s-2.35.62-2.35-.58a2.35 2.35 0 0 1 4.69 0Zm5.47 8.7c-2.3.79-1.75-1.47-2.55-3.76s-2.62-3.73-.33-4.52a4.39 4.39 0 1 1 2.9 8.28Z" fill="#fff" fill-opacity=".78"/>
      <text transform="translate(72.18 84.99)" font-size="44" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">{props.label}</text>
    </svg>
  );
}