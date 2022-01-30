import * as React from "react";

interface ButtonProps {
  onClick: () => void;
}

export function YesButton(props: ButtonProps) {
  return (
    <svg onClick={props.onClick} className="green-button" width="429" height="145" viewBox="0 0 429 145" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 5.71126C0 2.55702 2.55702 0 5.71126 0H82.8354L92.2603 1.15555C92.3709 1.16911 92.4828 1.16968 92.5935 1.15723L102.89 0H423.289C426.443 0 429 2.55702 429 5.71126V117.831C429 119.709 427.971 121.552 427.503 123.37C427.444 123.595 427.395 123.838 427.356 124.098C427.234 124.927 427.35 125.666 427.567 126.291C428.116 127.871 429 129.438 429 131.111V138.932C429 142.087 426.443 144.644 423.289 144.644H5.71128C2.55703 144.644 0 142.087 0 138.932V5.71126Z" fill="url(#paint0_angular_101_621)"/>
      <rect x="11.5059" y="11.506" width="405.988" height="121.632" rx="5.71126" fill="url(#paint1_linear_101_621)"/>
      <path d="M10.0684 57.9901C24.9762 48.4758 25.9159 73.2725 37.3318 91.1601C48.7478 109.048 95.5208 119.192 76.2765 133.474C30.5486 135.508 19.8451 144.69 8.83447 128.961C8.12571 127.948 7.75782 126.748 7.70309 125.513C6.64401 101.618 4.98416 61.2348 10.0684 57.9901Z" fill="#4D4646" fill-opacity="0.22" />
      <path d="M19.5331 86.5241C27.6823 81.3233 28.196 94.8781 34.4364 104.656C40.6768 114.434 66.2448 119.98 55.7251 127.787C31.4307 128.867 25.2214 133.639 19.3659 126.012C18.6133 125.032 18.2568 123.818 18.2025 122.583C17.624 109.436 16.8134 88.2598 19.5331 86.5241Z" fill="#4D4646" fill-opacity="0.22" />
      <path d="M409.83 59.2601C401.458 64.0938 401.547 50.5295 395.747 40.4838C389.947 30.4382 364.651 23.7623 375.507 16.4303C401.321 16.4303 406.962 11.3702 412.762 21.4159C412.762 34.324 412.762 57.5676 409.83 59.2601Z" fill="white" fill-opacity="0.22" />
      <path d="M406.014 18.0297C406.014 19.2384 404.963 18.6133 403.667 18.6133C402.371 18.6133 401.32 19.2384 401.32 18.0297C401.32 16.8211 402.371 15.8413 403.667 15.8413C404.963 15.8413 406.014 16.8211 406.014 18.0297Z" fill="white" fill-opacity="0.78"/>
      <path d="M411.479 26.7701C409.182 27.5643 409.726 25.2916 408.932 22.9948C408.138 20.698 406.306 19.2468 408.603 18.4526C410.9 17.6583 413.406 18.8764 414.2 21.1732C414.994 23.47 413.776 25.9758 411.479 26.7701Z" fill="white" fill-opacity="0.78"/>
      <path d="M174.76 95.38C174.725 94.2707 174.691 93.1093 174.656 91.896C174.656 90.6827 174.656 89.3827 174.656 87.996C174.656 86.1933 174.673 84.3213 174.708 82.38C174.743 80.4387 174.812 78.5147 174.916 76.608C173.009 75.6373 171.172 74.2333 169.404 72.396C167.671 70.524 166.024 68.4613 164.464 66.208C162.904 63.92 161.5 61.632 160.252 59.344C159.004 57.056 157.947 54.9933 157.08 53.156L165.66 49.672C166.249 51.1973 167.012 52.844 167.948 54.612C168.884 56.3453 169.907 58.0613 171.016 59.76C172.125 61.4587 173.217 63.0013 174.292 64.388C175.401 65.74 176.389 66.832 177.256 67.664C178.157 68.496 178.851 68.912 179.336 68.912C179.856 68.912 180.497 68.548 181.26 67.82C182.057 67.092 182.889 66.1387 183.756 64.96C184.657 63.7467 185.559 62.4293 186.46 61.008C187.396 59.552 188.263 58.096 189.06 56.64C189.892 55.1493 190.603 53.78 191.192 52.532C191.816 51.2493 192.267 50.2093 192.544 49.412L201.28 52.74C200.309 54.612 199.2 56.7267 197.952 59.084C196.704 61.4067 195.335 63.7293 193.844 66.052C192.353 68.3747 190.776 70.472 189.112 72.344C187.448 74.216 185.715 75.6373 183.912 76.608C183.843 78.3413 183.808 80.3867 183.808 82.744C183.808 85.0667 183.825 87.372 183.86 89.66C183.929 91.948 183.981 93.9067 184.016 95.536C183.392 95.536 182.647 95.536 181.78 95.536C180.913 95.5707 180.029 95.588 179.128 95.588C178.227 95.6227 177.395 95.64 176.632 95.64C175.904 95.6747 175.384 95.692 175.072 95.692L174.76 95.38ZM221.493 96.16C218.165 96.16 215.236 95.5013 212.705 94.184C210.209 92.9013 208.25 91.0987 206.829 88.776C205.442 86.4533 204.749 83.7667 204.749 80.716C204.749 78.8787 205.061 76.9547 205.685 74.944C206.309 72.8987 207.314 70.992 208.701 69.224C210.088 67.456 211.908 66.0173 214.161 64.908C216.449 63.7987 219.222 63.244 222.481 63.244C224.838 63.244 226.814 63.504 228.409 64.024C230.038 64.544 231.356 65.22 232.361 66.052C233.401 66.884 234.181 67.768 234.701 68.704C235.256 69.64 235.62 70.5413 235.793 71.408C236.001 72.24 236.105 72.9333 236.105 73.488C236.105 76.8507 234.684 79.4507 231.841 81.288C229.033 83.0907 225.046 83.992 219.881 83.992C218.702 83.992 217.576 83.94 216.501 83.836C215.461 83.732 214.49 83.6107 213.589 83.472C214.248 85.2053 215.34 86.488 216.865 87.32C218.39 88.1173 219.968 88.516 221.597 88.516C223.954 88.516 226.034 88.1 227.837 87.268C229.64 86.4013 231.338 85.084 232.933 83.316L237.561 89.972C236.452 90.8733 235.204 91.8093 233.817 92.78C232.465 93.7507 230.801 94.548 228.825 95.172C226.849 95.8307 224.405 96.16 221.493 96.16ZM222.637 71.044C220.592 71.044 218.789 71.564 217.229 72.604C215.669 73.644 214.525 75.0133 213.797 76.712C214.664 76.8507 215.513 76.972 216.345 77.076C217.212 77.1453 218.061 77.18 218.893 77.18C219.656 77.18 220.522 77.1107 221.493 76.972C222.498 76.8333 223.469 76.6253 224.405 76.348C225.376 76.0707 226.173 75.724 226.797 75.308C227.421 74.8573 227.733 74.3373 227.733 73.748C227.733 73.4707 227.594 73.124 227.317 72.708C227.04 72.292 226.537 71.9107 225.809 71.564C225.081 71.2173 224.024 71.044 222.637 71.044ZM256.878 96.316C254.52 96.316 252.336 96.0387 250.326 95.484C248.315 94.9293 246.495 94.2187 244.866 93.352C243.236 92.4853 241.78 91.5667 240.498 90.596L245.178 83.056C246.634 84.408 248.038 85.448 249.39 86.176C250.742 86.904 252.146 87.4067 253.602 87.684C255.092 87.9613 256.704 88.1 258.438 88.1C259.928 88.1 261.124 87.9093 262.026 87.528C262.927 87.112 263.378 86.592 263.378 85.968C263.378 85.448 262.944 85.0493 262.078 84.772C261.211 84.46 260.102 84.2 258.75 83.992C257.398 83.7493 255.976 83.4547 254.486 83.108C252.371 82.5533 250.395 81.912 248.558 81.184C246.72 80.456 245.23 79.468 244.086 78.22C242.976 76.972 242.422 75.308 242.422 73.228C242.422 71.564 242.82 70.108 243.618 68.86C244.415 67.5773 245.472 66.52 246.79 65.688C248.142 64.8213 249.667 64.18 251.366 63.764C253.064 63.348 254.815 63.14 256.618 63.14C259.738 63.14 262.424 63.5213 264.678 64.284C266.966 65.012 269.15 65.9827 271.23 67.196L266.498 74.372C265.458 73.644 264.262 73.02 262.91 72.5C261.592 71.9453 260.258 71.5293 258.906 71.252C257.588 70.94 256.358 70.784 255.214 70.784C253.966 70.784 252.978 70.9747 252.25 71.356C251.556 71.7373 251.21 72.2747 251.21 72.968C251.21 73.384 251.643 73.7827 252.51 74.164C253.411 74.5107 255.11 74.9787 257.606 75.568C259.096 75.9147 260.674 76.2787 262.338 76.66C264.002 77.0067 265.562 77.5093 267.018 78.168C268.508 78.792 269.704 79.7107 270.606 80.924C271.542 82.1027 272.01 83.68 272.01 85.656C272.01 88.984 270.675 91.584 268.006 93.456C265.336 95.3627 261.627 96.316 256.878 96.316Z" fill="white"/>
      <defs>
        <radialGradient id="paint0_angular_101_621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(214.5 72.3218) scale(312.159 105.249)">
          <stop offset="0.283733" stop-color="#5CA132"/>
          <stop offset="1" stop-color="#6EB52C"/>
        </radialGradient>
        <linearGradient id="paint1_linear_101_621" x1="546.318" y1="-44.0472" x2="465.027" y2="256.006" gradientUnits="userSpaceOnUse">
          <stop stop-color="#19642D"/>
          <stop offset="0.264174" stop-color="#5CA132"/>
          <stop offset="1" stop-color="#19642D"/>
        </linearGradient>
      </defs>
    </svg>
  );
}


export function NoButton(props: ButtonProps) {
  return (
    <svg onClick={props.onClick} className="green-button" width="429" height="145" viewBox="0 0 429 145" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 5.71126C0 2.55702 2.55702 0 5.71126 0H82.8354L92.2603 1.15555C92.3709 1.16911 92.4828 1.16968 92.5935 1.15723L102.89 0H423.289C426.443 0 429 2.55702 429 5.71126V117.831C429 119.709 427.971 121.552 427.503 123.37C427.444 123.595 427.395 123.838 427.356 124.098C427.234 124.927 427.35 125.666 427.567 126.291C428.116 127.871 429 129.438 429 131.111V138.932C429 142.087 426.443 144.644 423.289 144.644H5.71128C2.55703 144.644 0 142.087 0 138.932V5.71126Z" fill="url(#paint0_angular_101_620)"/>
      <rect x="11.5059" y="11.506" width="405.988" height="121.632" rx="5.71126" fill="url(#paint1_linear_101_620)"/>
      <path d="M10.0684 57.9901C24.9762 48.4758 25.9159 73.2725 37.3318 91.1601C48.7478 109.048 95.5208 119.192 76.2765 133.474C30.5486 135.508 19.8451 144.69 8.83447 128.961C8.12571 127.948 7.75782 126.748 7.70309 125.513C6.64401 101.618 4.98416 61.2348 10.0684 57.9901Z" fill="#4D4646" fill-opacity="0.22" />
      <path d="M19.5331 86.5241C27.6823 81.3233 28.196 94.8781 34.4364 104.656C40.6768 114.434 66.2448 119.98 55.7251 127.787C31.4307 128.867 25.2214 133.639 19.3659 126.012C18.6133 125.032 18.2568 123.818 18.2025 122.583C17.624 109.436 16.8134 88.2598 19.5331 86.5241Z" fill="#4D4646" fill-opacity="0.22" />
      <path d="M409.83 59.2601C401.458 64.0938 401.547 50.5295 395.747 40.4838C389.947 30.4382 364.651 23.7623 375.507 16.4303C401.321 16.4303 406.962 11.3702 412.762 21.4159C412.762 34.324 412.762 57.5676 409.83 59.2601Z" fill="white" fill-opacity="0.22" />
      <path d="M406.014 18.0297C406.014 19.2384 404.963 18.6133 403.667 18.6133C402.371 18.6133 401.32 19.2384 401.32 18.0297C401.32 16.8211 402.371 15.8413 403.667 15.8413C404.963 15.8413 406.014 16.8211 406.014 18.0297Z" fill="white" fill-opacity="0.78"/>
      <path d="M411.479 26.7701C409.182 27.5643 409.726 25.2916 408.932 22.9948C408.138 20.698 406.306 19.2468 408.603 18.4526C410.9 17.6583 413.406 18.8764 414.2 21.1732C414.994 23.47 413.776 25.9758 411.479 26.7701Z" fill="white" fill-opacity="0.78"/>
      <path d="M176.744 95.796C176.744 90.388 176.813 85.5173 176.952 81.184C177.125 76.816 177.333 72.8467 177.576 69.276C177.853 65.6707 178.148 62.3253 178.46 59.24C178.807 56.12 179.136 53.1387 179.448 50.296L188.392 50.66C188.253 51.7347 188.097 52.896 187.924 54.144C189.103 55.7387 190.385 57.5587 191.772 59.604C193.193 61.6493 194.632 63.816 196.088 66.104C197.579 68.3573 199.035 70.628 200.456 72.916C201.877 75.1693 203.229 77.336 204.512 79.416C205.795 81.4613 206.921 83.2987 207.892 84.928C208.135 82.536 208.256 79.1733 208.256 74.84C208.256 72.6213 208.221 70.3333 208.152 67.976C208.083 65.6187 207.996 63.3653 207.892 61.216C207.788 59.032 207.649 57.0907 207.476 55.392C207.303 53.6587 207.112 52.3067 206.904 51.336L216.68 50.14C216.749 51.8387 216.784 54.0747 216.784 56.848C216.819 59.5867 216.836 62.4987 216.836 65.584C216.836 68.3227 216.819 71.0787 216.784 73.852C216.749 76.5907 216.68 79.1213 216.576 81.444C216.472 83.7667 216.316 85.6907 216.108 87.216C215.727 90.1973 214.964 92.3987 213.82 93.82C212.676 95.2413 211.064 95.952 208.984 95.952C207.285 95.952 205.725 95.3627 204.304 94.184C202.917 93.0053 201.409 91.064 199.78 88.36C198.671 86.488 197.371 84.3387 195.88 81.912C194.424 79.4507 192.899 76.9373 191.304 74.372C189.744 71.8067 188.236 69.3627 186.78 67.04C186.503 71.096 186.295 75.152 186.156 79.208C186.017 83.2293 185.948 86.8693 185.948 90.128C185.948 91.168 185.948 92.1387 185.948 93.04C185.948 93.976 185.965 94.8427 186 95.64L176.744 95.796ZM238.522 96.264C235.749 96.264 233.322 95.8133 231.242 94.912C229.197 94.0107 227.498 92.78 226.146 91.22C224.794 89.6253 223.789 87.8053 223.13 85.76C222.471 83.7147 222.142 81.5653 222.142 79.312C222.142 77.024 222.541 74.9093 223.338 72.968C224.17 70.992 225.297 69.276 226.718 67.82C228.174 66.364 229.873 65.2373 231.814 64.44C233.755 63.608 235.87 63.192 238.158 63.192C240.55 63.192 242.769 63.608 244.814 64.44C246.859 65.272 248.645 66.4333 250.17 67.924C251.695 69.4147 252.874 71.1653 253.706 73.176C254.573 75.1867 255.006 77.3707 255.006 79.728C255.006 84.9627 253.567 89.036 250.69 91.948C247.813 94.8253 243.757 96.264 238.522 96.264ZM238.47 87.84C241.001 87.84 242.925 87.1293 244.242 85.708C245.594 84.2867 246.27 82.2413 246.27 79.572C246.27 77.18 245.542 75.256 244.086 73.8C242.63 72.344 240.723 71.616 238.366 71.616C236.945 71.616 235.645 71.9973 234.466 72.76C233.287 73.488 232.334 74.476 231.606 75.724C230.913 76.9373 230.566 78.2893 230.566 79.78C230.566 81.0973 230.826 82.38 231.346 83.628C231.901 84.876 232.767 85.8987 233.946 86.696C235.125 87.4587 236.633 87.84 238.47 87.84Z" fill="white"/>
      <defs>
        <radialGradient id="paint0_angular_101_620" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(214.5 72.3218) scale(312.159 105.249)">
          <stop offset="0.283733" stop-color="#D62627"/>
          <stop offset="1" stop-color="#DD871A"/>
        </radialGradient>
        <linearGradient id="paint1_linear_101_620" x1="546.318" y1="-44.0472" x2="465.027" y2="256.006" gradientUnits="userSpaceOnUse">
          <stop stop-color="#9C2515"/>
          <stop offset="0.264174" stop-color="#D62627"/>
          <stop offset="1" stop-color="#9C2515"/>
        </linearGradient>
      </defs>
    </svg>
  );
}