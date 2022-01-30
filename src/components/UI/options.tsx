import * as React from "react";

interface optionsProps {
    onReset: () => void,
    onSound: () => void,
    onInstructions: () => void,
    onClose: () => void,
  }

 export function Options(props: optionsProps){
  return (         
    <svg x={`${1773 / 1.60}`} y="0">
      {/* RESET */}
      <svg onClick={() => props.onReset()} x="0" y="30" width="55" height="55" viewBox="0 0 100 100" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.0587 5.20268e-05C40.6095 0.0154069 48.3732 3.38495 54.105 8.86263L58.7134 4.25424C60.6644 2.30341 64 3.68508 64 6.44405V23.742C64 25.4523 62.6135 26.8387 60.9032 26.8387H43.6053C40.8463 26.8387 39.4646 23.5031 41.4155 21.5522L46.8026 16.1651C42.8201 12.4362 37.667 10.3706 32.1923 10.3234C20.2699 10.2204 10.2203 19.8688 10.3234 32.1869C10.4212 43.8721 19.8947 53.6774 32 53.6774C37.3067 53.6774 42.3222 51.7835 46.2747 48.3154C46.8867 47.7785 47.811 47.8111 48.3867 48.3867L53.5044 53.5044C54.133 54.133 54.1019 55.1579 53.4422 55.7538C47.768 60.8791 40.2485 64 32 64C14.327 64 0.000129033 49.6732 8.66781e-10 32.0003C-0.000129031 14.3475 14.4059 -0.0315608 32.0587 5.20268e-05Z" fill="#6EB52C"/>
        <rect className="clickable" width="55" height="55" fill="transparent" />
      </svg>
      {/* SOUND */}
      <svg onClick={() => props.onSound()} x="60" y="30" width="86" height="55" viewBox="0 0 100 100" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.0738 1.17432L21.148 15.9995H4.02628C1.80176 15.9995 0 17.7895 0 19.9995V43.9997C0 46.2081 1.80176 47.9998 4.02628 47.9998H21.148L36.0738 62.8249C38.5952 65.3299 42.947 63.5699 42.947 59.9965V4.00268C42.947 0.425978 38.5919 -1.32737 36.0738 1.17432ZM77.4454 31.9996L85.1021 24.3929C86.159 23.3429 86.159 21.6395 85.1021 20.5895L81.2738 16.7861C80.2169 15.7361 78.5023 15.7361 77.4454 16.7861L69.7888 24.3929L62.1322 16.7861C61.0753 15.7361 59.3607 15.7361 58.3038 16.7861L54.4755 20.5895C53.4186 21.6395 53.4186 23.3429 54.4755 24.3929L62.1322 31.9996L54.4772 39.6047C53.4203 40.6547 53.4203 42.358 54.4772 43.4081L58.3055 47.2114C59.3624 48.2614 61.0769 48.2614 62.1338 47.2114L69.7888 39.6064L77.4454 47.2131C78.5023 48.2631 80.2169 48.2631 81.2738 47.2131L85.1021 43.4097C86.159 42.3597 86.159 40.6564 85.1021 39.6064L77.4454 31.9996Z" fill="#DD871A"/>
        <rect className="clickable" width="86" height="55" fill="transparent" />
      </svg>
      {/* INSTRUCTIONS */}
      <svg onClick={() => props.onInstructions()} x="170" width="55" height="100" viewBox="0 0 100 100" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.95662 61.3143H5.91324V40.4357H2.95662C1.32368 40.4357 0 39.1415 0 37.545V30.6406C0 29.0441 1.32368 27.75 2.95662 27.75H19.5137C21.1466 27.75 22.4703 29.0441 22.4703 30.6406V61.3143H25.4269C27.0599 61.3143 28.3836 62.6085 28.3836 64.205V71.1094C28.3836 72.7059 27.0599 74 25.4269 74H2.95662C1.32368 74 0 72.7059 0 71.1094V64.205C0 62.6085 1.32368 61.3143 2.95662 61.3143ZM14.1918 0C8.31328 0 3.54795 4.65897 3.54795 10.4062C3.54795 16.1535 8.31328 20.8125 14.1918 20.8125C20.0703 20.8125 24.8356 16.1535 24.8356 10.4062C24.8356 4.65897 20.0701 0 14.1918 0Z" fill="#FBCC3E"/>
        <rect className="clickable" width="55" height="100" fill="transparent" />
      </svg>
      {/* CLOSE */}
      <svg onClick={() => props.onClose()} x="220" y="30" width="55" height="55" viewBox="0 0 100 100" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.1309 32L62.3255 13.8055C64.5582 11.5727 64.5582 7.95273 62.3255 5.71818L58.2818 1.67455C56.0491 -0.558182 52.4291 -0.558182 50.1945 1.67455L32 19.8691L13.8055 1.67455C11.5727 -0.558182 7.95273 -0.558182 5.71818 1.67455L1.67455 5.71818C-0.558182 7.95091 -0.558182 11.5709 1.67455 13.8055L19.8691 32L1.67455 50.1945C-0.558182 52.4273 -0.558182 56.0473 1.67455 58.2818L5.71818 62.3255C7.95091 64.5582 11.5727 64.5582 13.8055 62.3255L32 44.1309L50.1945 62.3255C52.4273 64.5582 56.0491 64.5582 58.2818 62.3255L62.3255 58.2818C64.5582 56.0491 64.5582 52.4291 62.3255 50.1945L44.1309 32Z" fill="#E5E5E5"/>
        <rect className="clickable" width="55" height="55" fill="transparent" />
      </svg>
    </svg>
  );
 }