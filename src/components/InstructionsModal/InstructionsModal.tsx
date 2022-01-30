import * as React from "react";
import { useGameCanvas } from "../GameCanvas";

interface instructionsModalProps {
  onInstructions: () => void;
}

export function InstructionsModal(props: instructionsModalProps) {
  const canvas = useGameCanvas();

  return (
    <g
      transform={`translate(${1343 / 2 - (826 * 0.8) / 2 - 10}, ${
        canvas.height / 2 - (770 * 0.8) / 2 - 10
      }) scale(0.8)`}
    >
      <defs>
        <radialGradient
          id="d"
          cx="-528.82"
          cy="939.63"
          r="1"
          gradientTransform="matrix(0 787 842.37 0 -791085.62 416580)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d1d373"></stop>
          <stop offset="1" stopColor="#9fa132"></stop>
        </radialGradient>
        <radialGradient
          id="a"
          cx="-517.56"
          cy="935.95"
          r="1"
          gradientTransform="matrix(46.22 0 0 -46.22 24128.73 43886.84)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.28" stopColor="#f2f2e2"></stop>
          <stop offset="1" stopColor="#a0a08f"></stop>
        </radialGradient>
        <radialGradient
          id="f"
          cx="-517.56"
          cy="935.95"
          r="1"
          gradientTransform="matrix(46.22 0 0 -46.22 24128.73 43953.58)"
          xlinkHref="#a"
        ></radialGradient>
        <radialGradient
          id="i"
          cx="-517.56"
          cy="935.95"
          r="1"
          gradientTransform="matrix(46.22 0 0 -46.22 24195.47 43921.42)"
          xlinkHref="#a"
        ></radialGradient>
        <radialGradient
          id="l"
          cx="-517.56"
          cy="935.95"
          r="1"
          gradientTransform="matrix(46.22 0 0 -46.22 24061.99 43921.42)"
          xlinkHref="#a"
        ></radialGradient>
        <radialGradient
          id="c"
          cx="-525.17"
          cy="935.97"
          r="1"
          gradientTransform="matrix(138.25 0 0 -46.57 72813.31 44121.38)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.28" stopColor="#d1d2bd"></stop>
          <stop offset="1" stopColor="#a0a08f"></stop>
        </radialGradient>
        <radialGradient
          id="p"
          cx="-525.17"
          cy="935.97"
          r="1"
          gradientTransform="matrix(138.25 0 0 -46.57 72814.31 44005.38)"
          xlinkHref="#c"
        ></radialGradient>
        <linearGradient
          id="b"
          x1="251.81"
          x2="181.06"
          y1="222.35"
          y2="144.11"
          gradientTransform="matrix(1 0 0 -1 0 798)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#7b7c69"></stop>
          <stop offset="0.26" stopColor="#a0a08f"></stop>
          <stop offset="1" stopColor="#7b7c69"></stop>
        </linearGradient>
        <linearGradient
          id="g"
          x1="251.81"
          x2="181.06"
          y1="155.61"
          y2="77.37"
          xlinkHref="#b"
        ></linearGradient>
        <linearGradient
          id="j"
          x1="318.55"
          x2="247.8"
          y1="187.77"
          y2="109.53"
          xlinkHref="#b"
        ></linearGradient>
        <linearGradient
          id="m"
          x1="185.07"
          x2="114.32"
          y1="187.77"
          y2="109.53"
          xlinkHref="#b"
        ></linearGradient>
        <linearGradient
          id="o"
          x1="230.02"
          x2="194.08"
          y1="349.04"
          y2="216.25"
          xlinkHref="#b"
        ></linearGradient>
        <linearGradient
          id="q"
          x1="231.02"
          x2="195.08"
          y1="465.04"
          y2="332.25"
          xlinkHref="#b"
        ></linearGradient>
        <clipPath id="e">
          <path fill="none" d="M190.82 611.6h31.04v27.43h-31.04z"></path>
        </clipPath>
        <clipPath id="h">
          <path fill="none" d="M190.82 678.34h31.04v27.43h-31.04z"></path>
        </clipPath>
        <clipPath id="k">
          <path fill="none" d="M259.36 644.37h27.43v31.04h-27.43z"></path>
        </clipPath>
        <clipPath id="n">
          <path fill="none" d="M125.89 644.37h27.43v31.04h-27.43z"></path>
        </clipPath>
        <clipPath id="r">
          <path fill="none" d="M161 409h21v18h-21z"></path>
        </clipPath>
      </defs>
      <rect
        x={-canvas.width / 2}
        width={canvas.width * 2}
        y={-canvas.height / 2}
        height={canvas.height * 2}
        fill="black"
        opacity={0.5}
      />
      <rect
        width="826"
        height="770"
        x="13"
        y="13"
        fill="url(#d)"
        stroke="#646119"
        strokeWidth="26"
        rx="37"
      ></rect>
      <path
        className="clickable"
        onClick={() => props.onInstructions()}
        d="M783.58 71 795 59.63a3.57 3.57 0 0 0 0-5.06l-2.52-2.52a3.57 3.57 0 0 0-5.06 0L776 63.42l-11.37-11.37a3.57 3.57 0 0 0-5.06 0l-2.52 2.52a3.57 3.57 0 0 0 0 5.06L768.42 71l-11.37 11.37a3.57 3.57 0 0 0 0 5.06l2.52 2.57a3.57 3.57 0 0 0 5.06 0L776 78.58 787.37 90a3.57 3.57 0 0 0 5.06 0l2.57-2.57a3.57 3.57 0 0 0 0-5.06Z"
        fill="#646119"
      />
      <rect
        width="722"
        height="389"
        x="65"
        y="359"
        fill="#b5b02c"
        rx="20"
      ></rect>
      <path
        fill="url(#a)"
        d="M174.74 599.72a5.72 5.72 0 015.72-5.72H186a5.66 5.66 0 012 .35 1.47 1.47 0 001 0l.19-.07a5.91 5.91 0 011.81-.29h41.64a5.72 5.72 0 015.72 5.72v45.89a5.74 5.74 0 01-.7 2.75l-.07.13.36.92a5.67 5.67 0 01.41 2.12v.28a5.72 5.72 0 01-5.72 5.72h-52.18a5.72 5.72 0 01-5.72-5.72z"
      ></path>
      <rect
        width="53.71"
        height="53.71"
        x="179.65"
        y="598.91"
        fill="url(#b)"
        rx="5.72"
      ></rect>
      <path
        fill="#fff"
        fillOpacity="0.22"
        d="M228.84 620.08c-3.69 2.13-3.65-3.84-6.2-8.26s-13.69-7.36-8.91-10.59c11.36 0 13.84-2.23 16.4 2.19 0 5.69 0 15.92-1.29 16.66z"
      ></path>
      <path
        fill="#4d4646"
        fillOpacity="0.22"
        d="M178.2 619.5c6.56-4.19 7 6.73 12 14.6s25.61 12.34 17.14 18.62c-20.13.9-24.84 4.94-29.68-2a2.81 2.81 0 01-.5-1.51c-.47-10.51-1.16-28.28 1.04-29.71z"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0.78"
        d="M227.16 601.93c0 .54-.46.26-1 .26s-1 .28-1-.26a1 1 0 012.07 0zm2.4 3.85c-1 .35-.77-.65-1.12-1.66s-1.15-1.65-.14-2a1.94 1.94 0 011.26 3.66z"
      ></path>
      <path
        fill="#4d4646"
        fillOpacity="0.22"
        d="M182.37 632.06c3.58-2.29 3.81 3.67 6.55 8s14 6.74 9.37 10.18c-10.69.47-13.42 2.57-16-.78a2.64 2.64 0 01-.51-1.51c-.26-5.81-.61-15.13.59-15.89z"
      ></path>
      <g clipPath="url(#e)">
        <path
          fill="#f2f2e2"
          d="M209.25 639h-5.82a1.46 1.46 0 01-1.45-1.47v-12.22h-6.3a1.47 1.47 0 01-1-2.51l10.63-10.8a1.44 1.44 0 012.06 0L218 622.8a1.47 1.47 0 01-1 2.51h-6.3v12.25a1.46 1.46 0 01-1.45 1.44z"
        ></path>
      </g>
      <path
        fill="url(#f)"
        d="M174.74 666.46a5.72 5.72 0 015.72-5.72H186a5.9 5.9 0 012 .34 1.41 1.41 0 001 0l.19-.07a5.91 5.91 0 011.81-.29h41.64a5.72 5.72 0 015.72 5.72v45.88a5.76 5.76 0 01-.7 2.75l-.07.13.36.92a5.67 5.67 0 01.41 2.12v.28a5.72 5.72 0 01-5.72 5.72h-52.18a5.72 5.72 0 01-5.72-5.72z"
      ></path>
      <rect
        width="53.71"
        height="53.71"
        x="179.65"
        y="665.65"
        fill="url(#g)"
        rx="5.72"
      ></rect>
      <path
        fill="#fff"
        fillOpacity="0.22"
        d="M228.84 686.82c-3.69 2.13-3.65-3.84-6.2-8.26S209 671.2 213.73 668c11.36 0 13.84-2.23 16.4 2.19 0 5.65 0 15.89-1.29 16.63z"
      ></path>
      <path
        fill="#4d4646"
        fillOpacity="0.22"
        d="M178.2 686.24c6.56-4.19 7 6.73 12 14.6s25.61 12.33 17.14 18.62c-20.13.89-24.84 4.94-29.68-2a2.81 2.81 0 01-.5-1.51c-.47-10.51-1.16-28.28 1.04-29.71z"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0.78"
        d="M227.16 668.67c0 .54-.46.26-1 .26s-1 .28-1-.26a1 1 0 012.07 0zm2.4 3.85c-1 .35-.77-.65-1.12-1.66s-1.15-1.65-.14-2a1.94 1.94 0 011.26 3.66z"
      ></path>
      <path
        fill="#4d4646"
        fillOpacity="0.22"
        d="M182.37 698.8c3.58-2.29 3.81 3.67 6.55 8s14 6.74 9.37 10.18c-10.69.47-13.42 2.57-16-.78a2.66 2.66 0 01-.51-1.51c-.26-5.81-.61-15.13.59-15.89z"
      ></path>
      <g clipPath="url(#h)">
        <path
          fill="#f2f2e2"
          d="M203.43 678.34h5.82a1.46 1.46 0 011.45 1.47v12.24h6.3a1.48 1.48 0 011 2.51l-10.66 10.78a1.45 1.45 0 01-2.06 0l-10.65-10.78a1.47 1.47 0 011-2.51H202v-12.24a1.46 1.46 0 011.43-1.47z"
        ></path>
      </g>
      <path
        fill="url(#i)"
        d="M241.48 634.3a5.72 5.72 0 015.72-5.72h5.54a5.64 5.64 0 011.95.34 1.41 1.41 0 00.95 0l.19-.06a5.62 5.62 0 011.81-.29h41.64a5.72 5.72 0 015.72 5.73v45.88a5.7 5.7 0 01-.7 2.74l-.07.14.36.91a5.76 5.76 0 01.41 2.13v.27a5.73 5.73 0 01-5.72 5.73H247.2a5.73 5.73 0 01-5.72-5.73z"
      ></path>
      <rect
        width="53.71"
        height="53.71"
        x="246.38"
        y="633.48"
        fill="url(#j)"
        rx="5.72"
      ></rect>
      <path
        fill="#fff"
        fillOpacity="0.22"
        d="M295.58 654.66c-3.69 2.12-3.65-3.85-6.2-8.27s-13.69-7.36-8.91-10.58c11.36 0 13.84-2.23 16.4 2.19 0 5.68 0 15.91-1.29 16.66z"
      ></path>
      <path
        fill="#4d4646"
        fillOpacity="0.22"
        d="M244.94 654.08c6.56-4.19 7 6.72 12 14.59s25.61 12.33 17.14 18.63c-20.13.89-24.84 4.93-29.68-2a2.76 2.76 0 01-.5-1.52c-.47-10.5-1.2-28.28 1.04-29.7z"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0.78"
        d="M293.9 636.51c0 .53-.47.26-1 .26s-1 .27-1-.26a1 1 0 012.07 0zm2.4 3.85c-1 .35-.77-.65-1.12-1.66s-1.16-1.65-.14-2a1.94 1.94 0 111.26 3.66z"
      ></path>
      <path
        fill="#4d4646"
        fillOpacity="0.22"
        d="M249.1 666.63c3.59-2.29 3.82 3.68 6.56 8s14 6.75 9.37 10.18c-10.69.48-13.42 2.58-16-.78a2.61 2.61 0 01-.51-1.51c-.26-5.8-.61-15.12.58-15.89z"
      ></path>
      <g clipPath="url(#k)">
        <path
          fill="#f2f2e2"
          d="M259.36 662.8V657a1.46 1.46 0 011.47-1.45h12.25v-6.3a1.47 1.47 0 012.51-1l10.77 10.66a1.44 1.44 0 010 2.06l-10.77 10.65a1.47 1.47 0 01-2.51-1v-6.29h-12.25a1.46 1.46 0 01-1.47-1.53z"
        ></path>
      </g>
      <path
        fill="url(#l)"
        d="M108 634.3a5.72 5.72 0 015.72-5.72h5.54a5.74 5.74 0 012 .34 1.38 1.38 0 00.94 0l.19-.06a5.62 5.62 0 011.81-.29h41.6a5.72 5.72 0 015.72 5.72v45.88a5.7 5.7 0 01-.7 2.74l-.07.14.36.91a5.76 5.76 0 01.41 2.13v.27a5.73 5.73 0 01-5.72 5.73h-52.08a5.73 5.73 0 01-5.72-5.73z"
      ></path>
      <rect
        width="53.71"
        height="53.71"
        x="112.91"
        y="633.48"
        fill="url(#m)"
        rx="5.72"
      ></rect>
      <path
        fill="#fff"
        fillOpacity="0.22"
        d="M162.1 654.66c-3.69 2.12-3.65-3.85-6.2-8.27s-13.69-7.39-8.9-10.58c11.36 0 13.85-2.23 16.4 2.19-.01 5.68-.01 15.91-1.3 16.66z"
      ></path>
      <path
        fill="#4d4646"
        fillOpacity="0.22"
        d="M111.46 654.08c6.56-4.19 7 6.72 12 14.59S149.07 681 140.6 687.3c-20.13.89-24.84 4.93-29.68-2a2.84 2.84 0 01-.5-1.52c-.42-10.5-1.2-28.28 1.04-29.7z"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0.78"
        d="M160.42 636.51c0 .53-.46.26-1 .26s-1 .27-1-.26a1 1 0 012.07 0zm2.4 3.85c-1 .35-.77-.65-1.12-1.66s-1.15-1.65-.14-2a1.94 1.94 0 111.26 3.66z"
      ></path>
      <path
        fill="#4d4646"
        fillOpacity="0.22"
        d="M115.63 666.63c3.58-2.29 3.81 3.68 6.56 8s14 6.75 9.36 10.18c-10.69.48-13.42 2.58-16-.78a2.68 2.68 0 01-.51-1.51c-.25-5.8-.61-15.12.59-15.89z"
      ></path>
      <g clipPath="url(#n)">
        <path
          fill="#f2f2e2"
          d="M153.32 657v5.82a1.46 1.46 0 01-1.47 1.45H139.6v6.3a1.48 1.48 0 01-2.51 1l-10.77-10.66a1.44 1.44 0 010-2.06l10.77-10.65a1.47 1.47 0 012.51 1v6.29h12.25a1.46 1.46 0 011.47 1.51z"
        ></path>
      </g>
      <path
        fill="url(#c)"
        d="M112 506.16a4.16 4.16 0 014.16-4.16h32.53l4.12.51h.25l4.51-.51h140.27a4.16 4.16 0 014.16 4.16v47.65a23.18 23.18 0 01-.73 3.1 1.79 1.79 0 000 .23c0 1.22.75 2.41.75 3.63v1.07a4.16 4.16 0 01-4.16 4.16h-181.7a4.16 4.16 0 01-4.16-4.16z"
      ></path>
      <rect
        width="179.81"
        height="53.82"
        x="117.1"
        y="507.09"
        fill="url(#o)"
        rx="4.16"
      ></rect>
      <path
        fill="#4d4646"
        fillOpacity="0.22"
        d="M116.46 527.66c6.6-4.21 7 6.76 12.07 14.68s25.78 12.4 17.25 18.72c-20.25.9-25 5-29.87-2a3 3 0 01-.5-1.53c-.47-10.53-1.2-28.44 1.05-29.87z"
      ></path>
      <path
        fill="#4d4646"
        fillOpacity="0.22"
        d="M120.65 540.28c3.61-2.3 3.84 3.7 6.6 8s14.09 6.78 9.43 10.23c-10.76.48-13.51 2.59-16.1-.78a2.63 2.63 0 01-.52-1.52c-.25-5.79-.61-15.16.59-15.93z"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0.22"
        d="M293.51 528.22c-3.71 2.14-3.67-3.86-6.24-8.31s-13.77-7.4-9-10.64c11.43 0 13.93-2.24 16.5 2.21.04 5.71.04 15.99-1.26 16.74z"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0.78"
        d="M291.82 510c0 .53-.46.26-1 .26s-1 .27-1-.26a1 1 0 012.08 0zm2.42 3.84c-1 .36-.78-.65-1.13-1.67s-1.16-1.65-.14-2a1.94 1.94 0 111.27 3.67z"
      ></path>
      <path
        fill="url(#p)"
        d="M113 390.16a4.16 4.16 0 014.16-4.16h32.53l4.12.51h.25l4.51-.51h140.27a4.16 4.16 0 014.16 4.16v47.65a23.18 23.18 0 01-.73 3.1 1.79 1.79 0 000 .23c0 1.22.75 2.41.75 3.63v1.07a4.16 4.16 0 01-4.16 4.16h-181.7a4.16 4.16 0 01-4.16-4.16z"
      ></path>
      <rect
        width="179.81"
        height="53.82"
        x="118.1"
        y="391.09"
        fill="url(#q)"
        rx="4.16"
      ></rect>
      <path
        fill="#4d4646"
        fillOpacity="0.22"
        d="M117.46 411.66c6.6-4.21 7 6.76 12.07 14.67s25.78 12.41 17.25 18.73c-20.25.9-25 5-29.87-2a3 3 0 01-.5-1.52c-.47-10.54-1.2-28.45 1.05-29.88z"
      ></path>
      <path
        fill="#4d4646"
        fillOpacity="0.22"
        d="M121.65 424.28c3.61-2.3 3.84 3.7 6.6 8s14.09 6.78 9.43 10.23c-10.76.48-13.51 2.59-16.1-.78a2.61 2.61 0 01-.52-1.52c-.25-5.79-.61-15.16.59-15.93z"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0.22"
        d="M294.51 412.22c-3.71 2.14-3.67-3.86-6.24-8.31s-13.77-7.4-9-10.64c11.43 0 13.93-2.24 16.5 2.21.04 5.71.04 15.99-1.26 16.74z"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0.78"
        d="M292.82 394c0 .53-.46.26-1 .26s-1 .27-1-.26a1 1 0 012.08 0zm2.42 3.85c-1 .35-.78-.66-1.13-1.68s-1.16-1.65-.14-2a1.95 1.95 0 111.27 3.68z"
      ></path>
      <g clipPath="url(#r)">
        <path
          fill="#f2f2e2"
          d="M173.47 427h-3.94a1 1 0 01-1-1v-8h-4.26a1 1 0 01-.7-1.65l7.21-7.07a1 1 0 011.4 0l7.2 7.07a1 1 0 01-.69 1.65h-4.26v8a1 1 0 01-.96 1z"
        ></path>
      </g>
      <path
        fillOpacity="0.05"
        d="M19.47 589.93c1.91-12.45 5.39-17.6 8.16-19.71 2.28-1.74 5.48-2.41 8.22-3.27 8-2.53 27-2.86 46.95 37.06 26.4 52.78 17.6 65.1 37 88 13 15.39 50.73 51.48 74 73.46a10.45 10.45 0 01-7.16 18H91.31c-4.35.24-56.45 2.7-66.56-15.85-10.56-19.36-10.56-80.94-5.28-116.13s-3.47-38.69 0-61.56z"
      ></path>
      <path
        fillOpacity="0.05"
        d="M35.3 652.32c.86-5.64 2.24-8.8 3.58-10.56 1.75-2.3 5.13-3.28 8-3.72 5.48-.86 15.61 1.33 26.21 22.77 15.74 31.84 10.49 39.27 22 53.07 6.48 7.75 23.22 24.2 36.66 37.13 6.76 6.52 2.17 18.06-7.23 18.06H78.01c-3.41.18-33.62 1.44-39.56-9.57-6.3-11.68-6.3-48.82-3.15-70s-2.1-23.38 0-37.18z"
      ></path>
      <text
        fill="#646119"
        fontFamily="MochiyPopPOne-Regular, Mochiy Pop P One"
        fontSize="36"
        transform="translate(66.66 99.48)"
      >
        Instructions
        <tspan x="250.16" y="0" fontSize="24" letterSpacing="0em">
          :
        </tspan>
      </text>
      <text
        fill="#30341d"
        fontFamily="MochiyPopPOne-Regular, Mochiy Pop P One"
        fontSize="32"
        transform="translate(62.02 156.53)"
      >
        Split to overcome the obstacles.{" "}
        <tspan x="0" y="38.4">
          Press shift to switch between Jams.
        </tspan>
        <tspan x="0" y="76.8">
          Merge back to reach the goal.{" "}
        </tspan>
        <tspan x="0" y="115.2">
          First look at the map and then choose{" "}
        </tspan>
        <tspan x="0" y="153.6">
          which Jams you want to divide into.
        </tspan>
      </text>
      <text
        fill="#30341d"
        fontFamily="MochiyPopPOne-Regular, Mochiy Pop P One"
        fontSize="32"
        transform="translate(348.04 416.49)"
      >
        Press shift to switch{" "}
        <tspan x="0" y="38.4">
          between Jams
        </tspan>
      </text>
      <text
        fill="#30341d"
        fontFamily="MochiyPopPOne-Regular, Mochiy Pop P One"
        fontSize="32"
        transform="translate(348.04 545.84)"
      >
        Press space to split
      </text>
      <text
        fill="#30341d"
        fontFamily="MochiyPopPOne-Regular, Mochiy Pop P One"
        fontSize="32"
        transform="translate(348.04 643.52)"
      >
        Press arrows to{" "}
        <tspan x="0" y="38.4">
          move around
        </tspan>
      </text>
      <text
        fill="#f2f2e2"
        fontFamily="MochiyPopPOne-Regular, Mochiy Pop P One"
        fontSize="20"
        transform="translate(187.46 426)"
      >
        Shift
      </text>
      <text
        fill="#f2f2e2"
        fontFamily="MochiyPopPOne-Regular, Mochiy Pop P One"
        fontSize="20"
        transform="translate(148.82 540.77)"
      >
        Space
      </text>
      <text
        fill="#f2f2e2"
        fontFamily="MochiyPopPOne-Regular, Mochiy Pop P One"
        fontSize="20"
        transform="rotate(-90 395.39 147.5)"
      >
        [
      </text>
    </g>
  );
}
