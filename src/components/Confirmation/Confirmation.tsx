import * as React from "react";
import { useGameCanvas } from "../GameCanvas";

interface confirmationProps {
    label: string;
    onClickYes: () => void;
    onClickNo: () => void;
  }

 export function Confirmation(props: confirmationProps){
  const canvas = useGameCanvas();

  return (         
    <svg width={canvas.width} data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1728 1117">
    <defs>
      <radialGradient id="a" cx="564.19" cy="980.19" r="1" gradientTransform="matrix(312.16 0 0 -105.25 -175517.49 103778.52)" gradientUnits="userSpaceOnUse">
        <stop offset=".28" stop-color="#5ca132"/>
        <stop offset="1" stop-color="#6eb52c"/>
      </radialGradient>
      <radialGradient id="c" cx="564.19" cy="980.19" r="1" gradientTransform="matrix(312.16 0 0 -105.25 -174986.49 103778.52)" gradientUnits="userSpaceOnUse">
        <stop offset=".28" stop-color="#d62627"/>
        <stop offset="1" stop-color="#dd871a"/>
      </radialGradient>
      <linearGradient id="b" x1="650.23" y1="693" x2="568.94" y2="392.95" gradientTransform="matrix(1 0 0 -1 0 1115.89)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#19642d"/>
        <stop offset=".26" stop-color="#5ca132"/>
        <stop offset="1" stop-color="#19642d"/>
      </linearGradient>
      <linearGradient id="d" x1="1181.75" y1="693.73" x2="1100.46" y2="393.68" gradientTransform="matrix(1 0 0 -1 0 1115.89)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#9c2515"/>
        <stop offset=".26" stop-color="#d62627"/>
        <stop offset="1" stop-color="#9c2515"/>
      </linearGradient>
    </defs>
    <path fill="#30341d" d="M.64 0h1728v1117H.64z"/>
    <text transform="translate(292.27 398.92)" font-size="65" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">{props.label}</text>
    <g className="clickable" onClick={props.onClickYes} data-name="Yes Button">
      <path d="M384 547.71a5.71 5.71 0 0 1 5.71-5.71h77.12l9.43 1.16h.33l10.3-1.16h320.4a5.71 5.71 0 0 1 5.71 5.71v112.12c0 1.88-1 3.72-1.5 5.54a6.77 6.77 0 0 0-.14.73 4.43 4.43 0 0 0 .21 2.19c.55 1.58 1.43 3.15 1.43 4.82v7.82a5.71 5.71 0 0 1-5.71 5.71H389.71a5.71 5.71 0 0 1-5.71-5.71Z" fill="url(#a)"/>
      <rect x="395.18" y="554.23" width="405.99" height="121.63" rx="5.71" fill="url(#b)"/>
      <path d="M394.07 600c14.91-9.51 15.85 15.28 27.26 33.17s58.19 28 38.95 42.31c-45.73 2-56.43 11.22-67.45-4.51a6.59 6.59 0 0 1-1.13-3.45c-1.06-23.9-2.7-64.29 2.37-67.52Z" fill="#4d4646" fill-opacity=".22"/>
      <path d="M403.53 628.52c8.15-5.2 8.67 8.36 14.9 18.14s31.81 15.32 21.29 23.13c-24.29 1.08-30.5 5.85-36.36-1.78a6.07 6.07 0 0 1-1.16-3.43c-.58-13.14-1.39-34.32 1.33-36.06Z" fill="#4d4646" fill-opacity=".22"/>
      <path d="M793.83 601.26c-8.37 4.83-8.28-8.73-14.08-18.78s-31.1-16.72-20.24-24.05c25.81 0 31.45-5.06 37.25 5 0 12.89 0 36.14-2.93 37.83Z" fill="#fff" fill-opacity=".22"/>
      <path d="M790 560c0 1.21-1 .58-2.34.58s-2.35.63-2.35-.58a2.35 2.35 0 0 1 4.69 0ZM795.48 568.77c-2.3.79-1.75-1.48-2.55-3.78s-2.62-3.74-.33-4.54a4.4 4.4 0 1 1 2.88 8.32Z" fill="#fff" fill-opacity=".78"/>
      <text transform="translate(518.37 638.21)" font-size="65" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">Yes</text>
    </g>
    <g className="clickable" onClick={props.onClickNo} data-name="No Button">
      <path d="M915.19 547.71a5.71 5.71 0 0 1 5.71-5.71H998l9.43 1.16h.33l10.3-1.16h320.4a5.71 5.71 0 0 1 5.71 5.71v112.12c0 1.88-1 3.72-1.5 5.54a5 5 0 0 0-.14.73 4.43 4.43 0 0 0 .21 2.19c.55 1.58 1.43 3.15 1.43 4.82v7.82a5.71 5.71 0 0 1-5.71 5.71H920.9a5.7 5.7 0 0 1-5.71-5.71Z" fill="url(#c)"/>
      <rect x="926.69" y="553.51" width="405.99" height="121.63" rx="5.71" fill="url(#d)"/>
      <path d="M925.07 600c14.91-9.51 15.85 15.28 27.26 33.17s58.19 28 38.95 42.31c-45.73 2-56.43 11.22-67.44-4.51a6.51 6.51 0 0 1-1.14-3.45c-1.05-23.9-2.7-64.29 2.37-67.52Z" fill="#4d4646" fill-opacity=".22"/>
      <path d="M934.53 628.52c8.15-5.2 8.67 8.36 14.9 18.14s31.81 15.32 21.29 23.13c-24.29 1.08-30.5 5.85-36.36-1.78a6.07 6.07 0 0 1-1.16-3.43c-.58-13.14-1.39-34.32 1.33-36.06Z" fill="#4d4646" fill-opacity=".22"/>
      <path d="M1324.83 601.26c-8.37 4.83-8.28-8.73-14.08-18.78s-31.1-16.72-20.24-24.05c25.81 0 31.45-5.06 37.25 5 0 12.89 0 36.14-2.93 37.83Z" fill="#fff" fill-opacity=".22"/>
      <path d="M1321 560c0 1.21-1 .58-2.34.58s-2.35.63-2.35-.58a2.35 2.35 0 0 1 4.69 0ZM1326.48 568.77c-2.3.79-1.75-1.48-2.55-3.78s-2.62-3.74-.33-4.54a4.4 4.4 0 1 1 2.88 8.32Z" fill="#fff" fill-opacity=".78"/>
      <text transform="translate(1062.07 638.21)" font-size="65" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">No</text>
    </g>
  </svg>
  );
 }