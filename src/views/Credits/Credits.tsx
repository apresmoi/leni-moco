import React, { useEffect } from "react";
import "./styles.scoped.scss";
import { useHistory } from "react-router-dom";
import { useMusic } from "../../hooks/useMusic";
import { useSettings } from "../../store";

export function Credits() {
  const {music: {creditsMusic, stopAll}}= useSettings();
  const history = useHistory();

  useEffect(() => {
    stopAll && stopAll();
    creditsMusic?.play();
  }, [])
  
  return (
    <div className="credits" >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1728 1117">
        <defs>
          <clipPath id="a">
            <path fill="none" d="M745 118h238v116H745z"/>
          </clipPath>
          <clipPath id="b">
            <path fill="none" d="M1352.85 952.69h377.87V1117h-377.87z"/>
          </clipPath>
          <clipPath id="c">
            <path fill="none" d="M201.09 0h127.55v65.19H201.09z"/>
          </clipPath>
          <clipPath id="d">
            <path fill="none" d="M215-65h93.5V43.4H215z"/>
          </clipPath>
          <clipPath id="e">
            <path fill="none" d="M2.46 0h137.48v102.07H2.46z"/>
          </clipPath>
          <clipPath id="f">
            <path fill="none" d="M0-3h126.7v98.5H0z"/>
          </clipPath>
          <clipPath id="g">
            <path fill="none" d="M1577.8 0h137.48v102.07H1577.8z"/>
          </clipPath>
          <clipPath id="h">
            <path fill="none" d="M1575.34-3h126.7v98.5h-126.7z"/>
          </clipPath>
          <clipPath id="i">
            <path fill="none" d="M0 1038h272.99v79H0z"/>
          </clipPath>
          <clipPath id="j">
            <path fill="none" d="M1377.31 985.07H1728V1117h-350.69z"/>
          </clipPath>
        </defs>
        <path fill="#30341d" d="M0 0h1728v1117H0z"/>
        <path d="M786.56 121.36a17 17 0 0 1-8.9-2.27 14.9 14.9 0 0 1-5.84-6.3 21.09 21.09 0 0 1-2.06-9.62 23.85 23.85 0 0 1 2.24-9.82 17.54 17.54 0 0 1 3.15-4.75 14.78 14.78 0 0 1 4.85-3.44 15.56 15.56 0 0 1 6.72-1.35 18.14 18.14 0 0 1 5.8.84 15.91 15.91 0 0 1 4.28 2.06 15.41 15.41 0 0 1 3 2.56 18 18 0 0 1 1.93 2.48l1.05 1.6-6.14 4.65a23.74 23.74 0 0 0-2.18-3.36 10.46 10.46 0 0 0-3.11-2.77 8.85 8.85 0 0 0-4.58-1.1 8.1 8.1 0 0 0-4.66 1.23 9.48 9.48 0 0 0-2.94 3.2 14.11 14.11 0 0 0-1.47 4.11 20.85 20.85 0 0 0-.42 4 18.36 18.36 0 0 0 .42 3.91 11 11 0 0 0 1.43 3.53 7.93 7.93 0 0 0 2.77 2.56 11.25 11.25 0 0 0 9.2-.13 9 9 0 0 0 3.15-2.94 29.29 29.29 0 0 0 2.35-4.49l6.89 3.11a33.07 33.07 0 0 1-4.16 6.63 16 16 0 0 1-5.42 4.33 16.6 16.6 0 0 1-7.35 1.54Zm20.73-.08c.12-2.33.2-4.65.26-7s.08-4.62.08-6.88c0-2.08-.07-4.12-.12-6.14s-.1-4-.22-5.92l7.06-.21c0 1 .07 2.1.13 3.19a10.69 10.69 0 0 1 3.11-2.68 8 8 0 0 1 4.11-1 13 13 0 0 1 2.27.25 10.76 10.76 0 0 1 2.81 1l-.8 7.1a7.24 7.24 0 0 0-2.26-.88 8.2 8.2 0 0 0-2-.29 5.64 5.64 0 0 0-4.58 2.43 14.45 14.45 0 0 0-2.51 6.68c0 2 0 3.84-.09 5.63s-.1 3.36-.21 4.79Zm33.9.08a15.08 15.08 0 0 1-7.1-1.6 11.71 11.71 0 0 1-4.75-4.36 12.47 12.47 0 0 1-1.68-6.51 15.91 15.91 0 0 1 .76-4.67 14.1 14.1 0 0 1 2.44-4.62 12.53 12.53 0 0 1 4.41-3.48 15.19 15.19 0 0 1 6.73-1.35 15.55 15.55 0 0 1 4.78.63A9.61 9.61 0 0 1 850 97a7.43 7.43 0 0 1 1.89 2.14 7.28 7.28 0 0 1 .88 2.19 7 7 0 0 1 .25 1.68 7.11 7.11 0 0 1-3.44 6.3q-3.4 2.18-9.66 2.18-1.44 0-2.73-.12c-.84-.09-1.63-.19-2.36-.3a5.76 5.76 0 0 0 2.65 3.11 8.21 8.21 0 0 0 3.82 1 11.9 11.9 0 0 0 5-1 13.54 13.54 0 0 0 4.12-3.19l3.74 5.37c-.9.73-1.91 1.49-3 2.27a14.12 14.12 0 0 1-4 1.93 19 19 0 0 1-5.97.8Zm.92-20.29a7.7 7.7 0 0 0-4.37 1.26 7.46 7.46 0 0 0-2.77 3.32l2.06.3c.7 0 1.39.08 2.06.08a15.5 15.5 0 0 0 2.1-.17 16.33 16.33 0 0 0 2.35-.5 7.25 7.25 0 0 0 1.93-.84 1.34 1.34 0 0 0 .42-2.1 2.89 2.89 0 0 0-1.22-.93 6.12 6.12 0 0 0-2.56-.42ZM868 121.32a12.42 12.42 0 0 1-4.28-.76 10.82 10.82 0 0 1-3.74-2.35 11.11 11.11 0 0 1-2.6-3.91 14.68 14.68 0 0 1-1-5.58 16.21 16.21 0 0 1 1.09-6.22 12.51 12.51 0 0 1 7.1-6.89 13 13 0 0 1 4.54-.84 15.08 15.08 0 0 1 2.56.21 13.74 13.74 0 0 1 2.27.51c.08-2 .18-4.1.29-6.18s.3-4.11.46-6.13l7.06.46c-.22 2.33-.42 4.83-.59 7.52s-.29 5.38-.38 8.15-.08 5.47-.08 8.11q0 3.69.08 7t.3 6l-7.27.55v-1.56a11.76 11.76 0 0 1-2.69 1.3 9.18 9.18 0 0 1-3.12.61Zm-4.83-13a6.12 6.12 0 0 0 .84 3.44 4.66 4.66 0 0 0 2.06 1.73 6.25 6.25 0 0 0 2.35.5 6.46 6.46 0 0 0 5.21-2.65v-1q0-3.41.09-7a6.42 6.42 0 0 0-4.29-1.73 7.83 7.83 0 0 0-2.06.3 5.56 5.56 0 0 0-2 1 5.49 5.49 0 0 0-1.56 2 7.86 7.86 0 0 0-.64 3.43ZM885 90.87a6.45 6.45 0 0 0 0-.76v-.92c0-.9 0-1.85.08-2.86s.11-1.86.17-2.56l7.48.13c-.09.95-.18 2-.3 3.23s-.14 2.45-.17 3.74Zm-.17 30.07c-.08-1.74-.14-3.58-.17-5.54s0-4 0-6c0-2.6 0-5.14.09-7.6s.12-4.7.21-6.72h7.22c-.11 1.29-.18 2.88-.21 4.79s0 3.85 0 5.92v6c0 1.94.06 3.79.08 5.41s.1 2.83.13 3.7Zm24 .38a6.6 6.6 0 0 1-4-1.09 6 6 0 0 1-2.14-2.94 17.36 17.36 0 0 1-.88-4.33c-.11-1.62-.17-3.33-.17-5.12s.07-3.77.21-5.76c-1.88.25-3.68.58-5.42 1l-1.3-6.6a50.07 50.07 0 0 1 7.43-1.34l.63-4.49c.23-1.6.48-3.28.76-5l7.22.63c-.33 1.45-.63 2.91-.88 4.36s-.47 2.82-.67 4.16c1.57 0 3 0 4.41.13a38.68 38.68 0 0 1 3.86.33l-.84 6.6q-1.47-.17-3.06-.21t-3.15-.09c-.65 0-1.29 0-1.93.05-.17 2-.29 3.79-.34 5.25s0 2.49 0 3.1a15.2 15.2 0 0 0 .25 3.32c.19.67.5 1 .92 1a3.48 3.48 0 0 0 1.6-.46 8.34 8.34 0 0 0 1.72-1.35 8.79 8.79 0 0 0 1.47-1.8l3.23 6.76a12.78 12.78 0 0 1-8.94 3.89Zm24.4.17a19.74 19.74 0 0 1-5.29-.68 20.88 20.88 0 0 1-4.41-1.72 26.75 26.75 0 0 1-3.53-2.22l3.78-6.09a17.14 17.14 0 0 0 3.4 2.52 11.93 11.93 0 0 0 3.4 1.21 20.93 20.93 0 0 0 3.91.34 7.55 7.55 0 0 0 2.9-.46c.72-.34 1.09-.76 1.09-1.26s-.35-.74-1.05-1a15.14 15.14 0 0 0-2.69-.63c-1.09-.19-2.24-.43-3.44-.71a41.41 41.41 0 0 1-4.79-1.56 9.47 9.47 0 0 1-3.61-2.39 5.83 5.83 0 0 1-1.35-4 6.36 6.36 0 0 1 1-3.53 7.93 7.93 0 0 1 2.56-2.56 12.28 12.28 0 0 1 3.7-1.56 18 18 0 0 1 4.24-.5 20.56 20.56 0 0 1 6.51.92 26.37 26.37 0 0 1 5.25 2.39l-3.81 5.76a13.42 13.42 0 0 0-2.9-1.51 17.48 17.48 0 0 0-3.23-1 13.15 13.15 0 0 0-3-.38 5.19 5.19 0 0 0-2.4.47 1.42 1.42 0 0 0-.84 1.3c0 .33.35.66 1.05 1a38.22 38.22 0 0 0 4.12 1.14l3.82.88a18.37 18.37 0 0 1 3.78 1.22 6.79 6.79 0 0 1 2.9 2.22 6 6 0 0 1 1.13 3.83 7.3 7.3 0 0 1-3.23 6.3q-3.2 2.26-8.98 2.26Zm19.49-26.84a4.56 4.56 0 0 1-2.64-.72 4.36 4.36 0 0 1-1.56-1.8 5.84 5.84 0 0 1-.5-2.35 5.44 5.44 0 0 1 .5-2.27 4.56 4.56 0 0 1 1.64-1.85A5.25 5.25 0 0 1 953 85a4.07 4.07 0 0 1 3.44 1.42 5 5 0 0 1 1.09 3.2 4.78 4.78 0 0 1-1.47 3.9 5.09 5.09 0 0 1-3.35 1.13Zm0 24.53a4.56 4.56 0 0 1-2.64-.72 4.42 4.42 0 0 1-1.56-1.8 6 6 0 0 1-.5-2.4 5.47 5.47 0 0 1 .5-2.27 4.63 4.63 0 0 1 1.64-1.8 5.25 5.25 0 0 1 2.86-.72 4.07 4.07 0 0 1 3.44 1.43 5 5 0 0 1 1.09 3.19 4.79 4.79 0 0 1-1.47 3.91 5.14 5.14 0 0 1-3.37 1.18Z" fill="#fff"/>
        <g clip-path="url(#a)">
          <path d="M978.66 135c-1.78 1.51 4 27.46 1.83 28.78-4.08 2.43-15.87-6.13-18.22-3-6.8 9.17-21.88 20.11-13.33 28.72-4.89 2.88-13.71 1.9-18.41-1.09s-6.25-7.27-7-11.33c-.56-3-2.44-7-7.51-6.82a11.55 11.55 0 0 0-6.34 2.6c-3.1 2.21-6.2 4.45-9.3 6.66a8.77 8.77 0 0 1-4.17 1.87 5.49 5.49 0 0 1-6.25-5.31c-.05-2.46-.52-5.71-4.51-6.29-7.09 1.84-10.33 6.9-10.33 11.52s2.49 9.08 3.43 13.64a4.52 4.52 0 0 1-.47 3.86c-3.29 4.39-15.64 1.45-17.66-3.19s1.23-9.53.8-14.31-8.64-10.07-15.54-7.55c-5.87 2.15-5.59 8.39-12.21 9.5-7.89 1.35-16.48-6.32-22.54-3a7.15 7.15 0 0 0-2.72 3.24c-2.49 4.28-10.85 8.28-17.24 5.79-7.74-3-5.58-12.92-14.83-12.78-8.17.14-7.09 8-12.78 11.52-8.68-.76-15.91-5.51-16.34-10.74-.75-9.34 17.43-32.89 16.91-42.28" fill="#6eb52c"/>
          <path d="M975.82 132.58c-1 .95-.61 2.62-.51 3.67.18 2.17.51 4.34.89 6.51.8 5 1.83 10.07 2.34 15.1a24 24 0 0 1 .19 2.7 6.31 6.31 0 0 1-.05 1v.39c0 .36.14-.27 0 0 0 0-.14.2-.1.25 0-.11.29-.28.38-.36-.14.08.23 0 0 0-.28 0-.42 0 0 0h-.57c-.37 0 .33 0 0 0l-.57-.09-.56-.11h-.23c-.33-.09.47.11-.1 0-.84-.23-1.64-.5-2.44-.78-1.73-.61-3.42-1.34-5.2-2a16.47 16.47 0 0 0-5.07-1.11 4.62 4.62 0 0 0-4.17 2c-1.41 1.78-3 3.48-4.51 5.2-3.23 3.5-6.56 7-8.86 10.79-2 3.34-3.15 7.12-1.32 10.6a10.9 10.9 0 0 0 1.93 2.53c.09-.5.23-1 .33-1.53-4.23 2.39-11.31 1.33-15.11-.89-5.11-3-5.91-7.43-6.89-11.43-.75-3.2-3.47-7.76-10.37-7.12-3.75.36-6.14 2.33-8.4 3.95-2.81 2-5.53 4.06-8.39 6a5 5 0 0 1-3.1 1.12 3.16 3.16 0 0 1-2-1.2c-1.32-1.47-1-3.11-1.27-4.7a6 6 0 0 0-3.33-4.84 8.9 8.9 0 0 0-2.06-.69 5.41 5.41 0 0 0-2.87.22 18.65 18.65 0 0 0-3.84 1.64c-4.74 2.7-6.76 6.79-6.8 10.6a23 23 0 0 0 1.5 7.48c.79 2.39 1.87 4.84 2.11 7.28a2.89 2.89 0 0 1-1 2.76 4.33 4.33 0 0 1-1.87.77 10.62 10.62 0 0 1-2.63.09 16.53 16.53 0 0 1-3.19-.64 10.68 10.68 0 0 1-5-2.89c-1.55-1.81-1.22-4.31-.89-6.32.42-2.44 1.22-4.84 1.26-7.31a7.89 7.89 0 0 0-2.43-5.81 16.34 16.34 0 0 0-15.48-4.17c-5.12 1.44-6.29 5-8.92 7.64A6.43 6.43 0 0 1 832 181a19 19 0 0 1-6.37-1.22c-4.13-1.34-9.2-3.73-14.17-2.39-3.28.89-4.13 2.92-5.3 4.75a12 12 0 0 1-5.4 4.2 12.14 12.14 0 0 1-7.45 1 7.31 7.31 0 0 1-4.18-2.64c-2.06-2.39-2.72-5.34-5.06-7.76a9.5 9.5 0 0 0-4.79-2.58 13.45 13.45 0 0 0-6.94.39c-4.36 1.53-5.44 5.06-7 7.67a10.17 10.17 0 0 1-3.34 3.48l2.06-.34c-6.75-.64-12.48-3.67-14.26-7.62-1.36-3-.05-6 1.17-8.93 3.19-7.5 8.26-14.68 11.92-22.1 1.69-3.34 3.38-6.93 3.24-10.46.18-2.11-4.32-1.61-4.23 0 .14 2.67-.94 5.17-2.15 7.84-1.65 3.51-3.57 6.84-5.44 10.15s-3.94 6.79-5.73 10.21a34.37 34.37 0 0 0-3.47 9.06c-.66 3.48.8 6.82 4.46 9.6a22.9 22.9 0 0 0 7.6 3.67 30 30 0 0 0 4.69 1 4.85 4.85 0 0 0 3.09-.27 8.89 8.89 0 0 0 1.36-1c3-2.5 3.52-5.78 5.91-8.31a5.36 5.36 0 0 1 .85-.78l.28-.17a4.48 4.48 0 0 0 .47-.27 5.7 5.7 0 0 1 2.06-.48h1.17c.24 0 .52.09.75.11 0 0 .33.09.1 0l.23.09c.19.05.38.13.57.19s-.05 0-.05 0 .19.09.28.14l.47.28.28.19a10.5 10.5 0 0 1 2.53 3.42 36.33 36.33 0 0 0 2.58 4.26c2.35 3.09 7 5.39 13 4.59a19.94 19.94 0 0 0 8.21-3.09 13.94 13.94 0 0 0 2.9-2.45 18 18 0 0 0 2-2.94 3.91 3.91 0 0 1 2.26-1.76s0 0 .37-.08c.14 0 .28 0 .38-.05-.1 0-.38 0 0 0h.61a2.13 2.13 0 0 1 .61.05 30.94 30.94 0 0 1 6.38 1.81c4.41 1.53 10.13 3.25 15 1.22 4.55-1.89 5.07-5.42 8.26-7.87a7.79 7.79 0 0 1 5.86-1.36 11.37 11.37 0 0 1 6 3 6.45 6.45 0 0 1 2.25 5.46c-.14 2.5-1 4.95-1.36 7.42A8.51 8.51 0 0 0 859 196a13.14 13.14 0 0 0 5.54 3.59c4.12 1.58 10.55 2.22 14.07-.31 2.63-1.89 2.2-4.37 1.64-6.62-.61-2.53-1.64-5-2.39-7.53-1.18-4-1.41-8.29 2.15-11.91a14 14 0 0 1 6.29-3.42c-.56.06-1.08.08-1.64.14 2.53.42 2.81 2.61 2.91 4 .18 2 .28 4.08 2.39 5.81 2.39 2 6.42 2.33 9.66.75a28.26 28.26 0 0 0 4.46-3l4.78-3.42a34.17 34.17 0 0 1 4.32-2.89 6 6 0 0 1 3.8-.69c2.25.47 3.28 2.64 3.75 4 .8 2.22.94 4.5 1.92 6.73a15.79 15.79 0 0 0 5.54 6.51c5.25 3.61 15.66 5 21.86 1.42a.94.94 0 0 0 .32-1.53c-2.9-3-2.62-6.35-1.07-9.57 1.78-3.67 4.92-7.06 8-10.4 1.59-1.73 3.14-3.42 4.64-5.17a21.41 21.41 0 0 0 1.88-2.34c.09-.17-.24.11-.05 0s-.42.16 0 0h-.09c-.33 0-.24.06 0 0 .47.06-.38-.05 0 0 .15 0 .29 0 .43.06a4.64 4.64 0 0 1 .51.11c.47.08-.14 0 .19.06.85.22 1.6.5 2.39.78 1.74.61 3.38 1.3 5.12 1.91a19.25 19.25 0 0 0 5.44 1.2c1.54.06 3.42-.31 4.22-1.14 1-1.06.65-2.75.56-3.92-.33-4.78-1.31-9.57-2.11-14.32-.38-2.37-.8-4.7-1.08-7.07-.09-.86-.19-1.75-.23-2.61v-1a1.17 1.17 0 0 1 0-.37c.05-.25.24-.36 0-.05.05-.06 0-.17.1-.22.19-.25-.28.3-.1.11 1.82-1.18-1.84-2.46-3.3-1.1Z" fill="#19642d"/>
          <path d="M804.91 187.24c.23-.32.47-.65.65-.93s-.23.32-.09.09a2.22 2.22 0 0 1 .19-.23 4.74 4.74 0 0 1 .42-.52c.52-.61 1.08-1.17 1.64-1.73 1.17-1.17 2.44-2.24 3.66-3.32a32.19 32.19 0 0 0 6.9-7.8 20 20 0 0 0 2.25-6.18 2.1 2.1 0 0 0-4-1.12 14.71 14.71 0 0 1-.7 2.76 3.09 3.09 0 0 1-.24.61.71.71 0 0 0-.09.28c-.19.47.14-.28 0 0s-.37.79-.56 1.17a21 21 0 0 1-1.36 2.15c-.1.14-.38.56-.1.14a3.24 3.24 0 0 1-.42.51c-.28.33-.51.61-.8.94-2.2 2.43-4.83 4.44-7.22 6.73a27.68 27.68 0 0 0-3.71 4.35 2.13 2.13 0 0 0 .76 2.9 2.2 2.2 0 0 0 2.82-.8ZM863.84 181.61a37.43 37.43 0 0 0 2-5.47 32.62 32.62 0 0 0 .75-4.21c.1-.56.14-1.17.24-1.73v-.37c-.09.7 0 .09 0-.05s.1-.61.14-.89a26.16 26.16 0 0 1 1.18-4.25 2.12 2.12 0 0 0-1.46-2.58 2.16 2.16 0 0 0-2.58 1.45 34 34 0 0 0-1.69 8.09v.42a.42.42 0 0 1-.05.24c.05-.33.05-.42.05-.24s-.1.61-.14.89a14.51 14.51 0 0 1-.42 1.92c-.19.75-.43 1.49-.66 2.24-.14.42-.28.84-.47 1.27-.09.23-.19.46-.28.7s-.1.28-.05.09c0 .14-.14.28-.19.42a2.22 2.22 0 0 0 .75 2.9 2.15 2.15 0 0 0 2.88-.84ZM966.1 157.63a12.27 12.27 0 0 0-.75-9.21 12.6 12.6 0 0 0-6.7-6.31 2.1 2.1 0 0 0-2.58 1.45 2.13 2.13 0 0 0 1.45 2.57c-.47-.19 0 0 .09 0a1.62 1.62 0 0 1 .42.24c.29.14.57.33.8.47s.24.18.38.28c-.28-.19-.1-.1 0 0a3.84 3.84 0 0 1 .6.61 6.35 6.35 0 0 1 .61.7c.14.19.14.24 0 0l.29.38a11.42 11.42 0 0 1 .93 1.63c.19.38-.14-.37 0 .1l.14.42a6.62 6.62 0 0 1 .24.84 5 5 0 0 1 .18.84c0 .09.05.19.05.33a.35.35 0 0 0-.05-.24 1.51 1.51 0 0 1 .05.47 5.93 5.93 0 0 1 0 .94 3.23 3.23 0 0 1 0 .93 1.7 1.7 0 0 1 0-.23v.32c0 .14-.05.33-.09.47-.1.33-.14.61-.24.89a2.13 2.13 0 0 0 1.46 2.57 2.29 2.29 0 0 0 2.72-1.46ZM925.22 176.15a53.06 53.06 0 0 1-2.57-9.63c0-.28-.1-.56-.14-.8s0-.28 0-.42c-.1-.51 0 .42 0 0s-.1-.84-.14-1.22-.05-.7-.1-1a2.11 2.11 0 0 0-4.22 0 29.78 29.78 0 0 0 .56 4.49 55.64 55.64 0 0 0 2.63 9.78 2.13 2.13 0 0 0 2.58 1.44 2.23 2.23 0 0 0 1.4-2.64ZM892.05 174.88a36.18 36.18 0 0 0-1.87-9.91c-.52-1.73-1-3.46-1.5-5.24-.24-.94-.47-1.87-.66-2.81-.1-.46-.19-.88-.28-1.35 0-.24-.1-.47-.14-.75s-.05-.23-.05-.37-.09-.57 0-.28 0-.15 0-.19-.05-.33-.05-.47 0-.56-.09-.84c-.05-.61-.1-1.17-.1-1.78a31.81 31.81 0 0 1 .1-3.78 2.1 2.1 0 0 0-2.11-2.11 2.17 2.17 0 0 0-2.12 2.11 41.73 41.73 0 0 0 1.22 12.67c.85 3.41 2 6.78 2.82 10.19.19.89.37 1.73.51 2.62.05.28 0-.42 0-.14s.05.23.05.37V174.83a2.13 2.13 0 0 0 2.12 2.1 2 2 0 0 0 2.15-2.05Z" fill="#19642d"/>
        </g>
        <path d="M143 886c-7.19 0-14 8.57-14 15.2 0 4.37 4.33 8.79 14 8.79 10.15 0 13.92-5.15 13.92-8.39.01-6.53-7-15.6-13.92-15.6Z" fill="#6eb52c"/>
        <path d="M143 912c-11 0-16-5.39-16-10.78 0-7.6 7.54-17.22 16-17.22 8.09 0 15.95 10.08 15.95 17.62C159 905.61 154.62 912 143 912Zm0-26c-7.19 0-14 8.57-14 15.2 0 4.37 4.33 8.79 14 8.79 10.15 0 13.92-5.15 13.92-8.39.01-6.53-7-15.6-13.92-15.6Z" fill="#19642d"/>
        <path d="M143 898.26h-.85c4.72.19 8.41 1.94 8.41 4s-4.15 4-9.27 4-9.27-1.83-9.27-4v-.23a2.39 2.39 0 0 0-.29 1.12c0 2.69 5 5 11.24 5s11.24-2.22 11.24-5-5.02-4.89-11.21-4.89Z" fill="#5ca132"/>
        <path d="M138.55 891.17a1.34 1.34 0 0 1-.65-.17 1.47 1.47 0 0 1-.49-.47 1.21 1.21 0 0 1-.18-.5 1.35 1.35 0 0 1 0-.53 1.4 1.4 0 0 1 .22-.48 1.54 1.54 0 0 1 .4-.36 1.44 1.44 0 0 1 .5-.19 1.19 1.19 0 0 1 .53 0 1.28 1.28 0 0 1 .49.22 1.25 1.25 0 0 1 .36.4 1.34 1.34 0 0 1-.42 1.82h-.08a1.47 1.47 0 0 1-.68.26Zm-8 7.44a1.59 1.59 0 0 0-.07.65 1.71 1.71 0 0 0 .19.63 1.59 1.59 0 0 0 .44.49 1.61 1.61 0 0 0 .59.28 1.63 1.63 0 0 0 .66 0 1.67 1.67 0 0 0 .6-.25 1.58 1.58 0 0 0 .45-.48 1.46 1.46 0 0 0 .23-.61 12.34 12.34 0 0 1 3-6 1.33 1.33 0 0 0 .32-1 1.35 1.35 0 0 0-2.38-.76 22.52 22.52 0 0 0-4 7.07Z" fill="#b8d373"/>
        <path d="M143 540c-7.19 0-14 8.57-14 15.2 0 4.37 4.33 8.79 14 8.79 10.15 0 13.92-5.15 13.92-8.39.01-6.53-7-15.6-13.92-15.6Z" fill="#6eb52c"/>
        <path d="M143 566c-11 0-16-5.39-16-10.78 0-7.6 7.54-17.22 16-17.22 8.09 0 15.95 10.08 15.95 17.62C159 559.61 154.62 566 143 566Zm0-26c-7.19 0-14 8.57-14 15.2 0 4.37 4.33 8.79 14 8.79 10.15 0 13.92-5.15 13.92-8.39.01-6.53-7-15.6-13.92-15.6Z" fill="#19642d"/>
        <path d="M143 552.26h-.85c4.72.19 8.41 1.94 8.41 4s-4.15 4-9.27 4-9.27-1.83-9.27-4v-.23a2.39 2.39 0 0 0-.29 1.12c0 2.69 5 5 11.24 5s11.24-2.22 11.24-5-5.02-4.89-11.21-4.89Z" fill="#5ca132"/>
        <path d="M138.55 545.17a1.34 1.34 0 0 1-.65-.17 1.47 1.47 0 0 1-.49-.47 1.21 1.21 0 0 1-.18-.5 1.35 1.35 0 0 1 0-.53 1.4 1.4 0 0 1 .22-.48 1.54 1.54 0 0 1 .4-.36 1.44 1.44 0 0 1 .5-.19 1.19 1.19 0 0 1 .53 0 1.28 1.28 0 0 1 .49.22 1.25 1.25 0 0 1 .36.4 1.34 1.34 0 0 1-.42 1.82h-.08a1.47 1.47 0 0 1-.68.26Zm-8 7.44a1.59 1.59 0 0 0-.07.65 1.71 1.71 0 0 0 .19.63 1.59 1.59 0 0 0 .44.49 1.61 1.61 0 0 0 .59.28 1.63 1.63 0 0 0 .66 0 1.67 1.67 0 0 0 .6-.25 1.58 1.58 0 0 0 .45-.48 1.46 1.46 0 0 0 .23-.61 12.34 12.34 0 0 1 3-6 1.33 1.33 0 0 0 .32-1 1.35 1.35 0 0 0-2.38-.76 22.52 22.52 0 0 0-4 7.07Z" fill="#b8d373"/>
        <path d="M143 291c-7.19 0-14 8.57-14 15.2 0 4.37 4.33 8.79 14 8.79 10.15 0 13.92-5.15 13.92-8.39.01-6.53-7-15.6-13.92-15.6Z" fill="#6eb52c"/>
        <path d="M143 317c-11 0-16-5.39-16-10.79 0-7.59 7.54-17.21 16-17.21 8.09 0 15.95 10.08 15.95 17.62C159 310.61 154.62 317 143 317Zm0-26c-7.19 0-14 8.57-14 15.2 0 4.37 4.33 8.79 14 8.79 10.15 0 13.92-5.15 13.92-8.39.01-6.53-7-15.6-13.92-15.6Z" fill="#19642d"/>
        <path d="M143 303.26h-.85c4.72.19 8.41 1.94 8.41 4.05s-4.15 4-9.27 4-9.27-1.83-9.27-4v-.23a2.39 2.39 0 0 0-.29 1.12c0 2.69 5 5 11.24 5s11.24-2.22 11.24-5-5.02-4.94-11.21-4.94Z" fill="#5ca132"/>
        <path d="M138.55 296.17a1.34 1.34 0 0 1-.65-.17 1.41 1.41 0 0 1-.49-.48 1.12 1.12 0 0 1-.18-.49 1.35 1.35 0 0 1 0-.53 1.4 1.4 0 0 1 .22-.48 1.54 1.54 0 0 1 .4-.36 1.44 1.44 0 0 1 .5-.19 1.19 1.19 0 0 1 .53 0 1.28 1.28 0 0 1 .49.22 1.25 1.25 0 0 1 .36.4 1.34 1.34 0 0 1-.42 1.82h-.08a1.47 1.47 0 0 1-.68.26Zm-8 7.44a1.59 1.59 0 0 0-.07.65 1.71 1.71 0 0 0 .19.63 1.59 1.59 0 0 0 .44.49 1.61 1.61 0 0 0 .59.28 1.63 1.63 0 0 0 .66 0 1.67 1.67 0 0 0 .6-.25 1.58 1.58 0 0 0 .45-.48 1.46 1.46 0 0 0 .23-.61 12.34 12.34 0 0 1 3-6 1.33 1.33 0 0 0 .32-1 1.35 1.35 0 0 0-2.38-.76 22.52 22.52 0 0 0-4 7.07Z" fill="#b8d373"/>
        <path d="M143 363c-7.19 0-14 8.57-14 15.2 0 4.37 4.33 8.79 14 8.79 10.15 0 13.92-5.15 13.92-8.39.01-6.53-7-15.6-13.92-15.6Z" fill="#6eb52c"/>
        <path d="M143 389c-11 0-16-5.39-16-10.79 0-7.59 7.54-17.21 16-17.21 8.09 0 15.95 10.08 15.95 17.62C159 382.61 154.62 389 143 389Zm0-26c-7.19 0-14 8.57-14 15.2 0 4.37 4.33 8.79 14 8.79 10.15 0 13.92-5.15 13.92-8.39.01-6.53-7-15.6-13.92-15.6Z" fill="#19642d"/>
        <path d="M143 375.26h-.85c4.72.19 8.41 1.94 8.41 4.05s-4.15 4-9.27 4-9.27-1.83-9.27-4v-.23a2.39 2.39 0 0 0-.29 1.12c0 2.69 5 5 11.24 5s11.24-2.22 11.24-5-5.02-4.94-11.21-4.94Z" fill="#5ca132"/>
        <path d="M138.55 368.17a1.34 1.34 0 0 1-.65-.17 1.41 1.41 0 0 1-.49-.48 1.12 1.12 0 0 1-.18-.49 1.35 1.35 0 0 1 0-.53 1.4 1.4 0 0 1 .22-.48 1.54 1.54 0 0 1 .4-.36 1.44 1.44 0 0 1 .5-.19 1.19 1.19 0 0 1 .53 0 1.28 1.28 0 0 1 .49.22 1.25 1.25 0 0 1 .36.4 1.34 1.34 0 0 1-.42 1.82h-.08a1.47 1.47 0 0 1-.68.26Zm-8 7.44a1.59 1.59 0 0 0-.07.65 1.71 1.71 0 0 0 .19.63 1.59 1.59 0 0 0 .44.49 1.61 1.61 0 0 0 .59.28 1.63 1.63 0 0 0 .66 0 1.67 1.67 0 0 0 .6-.25 1.58 1.58 0 0 0 .45-.48 1.46 1.46 0 0 0 .23-.61 12.34 12.34 0 0 1 3-6 1.33 1.33 0 0 0 .32-1 1.35 1.35 0 0 0-2.38-.76 22.52 22.52 0 0 0-4 7.07Z" fill="#b8d373"/>
        <path d="M143 665c-7.19 0-14 8.57-14 15.2 0 4.37 4.33 8.79 14 8.79 10.15 0 13.92-5.15 13.92-8.39.01-6.53-7-15.6-13.92-15.6Z" fill="#6eb52c"/>
        <path d="M143 691c-11 0-16-5.39-16-10.78 0-7.6 7.54-17.22 16-17.22 8.09 0 15.95 10.08 15.95 17.62C159 684.61 154.62 691 143 691Zm0-26c-7.19 0-14 8.57-14 15.2 0 4.37 4.33 8.79 14 8.79 10.15 0 13.92-5.15 13.92-8.39.01-6.53-7-15.6-13.92-15.6Z" fill="#19642d"/>
        <path d="M143 677.26h-.85c4.72.19 8.41 1.94 8.41 4s-4.15 4-9.27 4-9.27-1.83-9.27-4v-.23a2.39 2.39 0 0 0-.29 1.12c0 2.69 5 5 11.24 5s11.24-2.22 11.24-5-5.02-4.89-11.21-4.89Z" fill="#5ca132"/>
        <path d="M138.55 670.17a1.34 1.34 0 0 1-.65-.17 1.47 1.47 0 0 1-.49-.47 1.21 1.21 0 0 1-.18-.5 1.35 1.35 0 0 1 0-.53 1.4 1.4 0 0 1 .22-.48 1.54 1.54 0 0 1 .4-.36 1.44 1.44 0 0 1 .5-.19 1.19 1.19 0 0 1 .53 0 1.28 1.28 0 0 1 .49.22 1.25 1.25 0 0 1 .36.4 1.34 1.34 0 0 1-.42 1.82h-.08a1.47 1.47 0 0 1-.68.26Zm-8 7.44a1.59 1.59 0 0 0-.07.65 1.71 1.71 0 0 0 .19.63 1.59 1.59 0 0 0 .44.49 1.61 1.61 0 0 0 .59.28 1.63 1.63 0 0 0 .66 0 1.67 1.67 0 0 0 .6-.25 1.58 1.58 0 0 0 .45-.48 1.46 1.46 0 0 0 .23-.61 12.34 12.34 0 0 1 3-6 1.33 1.33 0 0 0 .32-1 1.35 1.35 0 0 0-2.38-.76 22.52 22.52 0 0 0-4 7.07Z" fill="#b8d373"/>
        <path d="M143 814c-7.19 0-14 8.57-14 15.2 0 4.37 4.33 8.79 14 8.79 10.15 0 13.92-5.15 13.92-8.39.01-6.53-7-15.6-13.92-15.6Z" fill="#6eb52c"/>
        <path d="M143 840c-11 0-16-5.39-16-10.78 0-7.6 7.54-17.22 16-17.22 8.09 0 15.95 10.08 15.95 17.62C159 833.61 154.62 840 143 840Zm0-26c-7.19 0-14 8.57-14 15.2 0 4.37 4.33 8.79 14 8.79 10.15 0 13.92-5.15 13.92-8.39.01-6.53-7-15.6-13.92-15.6Z" fill="#19642d"/>
        <path d="M143 826.26h-.85c4.72.19 8.41 1.94 8.41 4s-4.15 4-9.27 4-9.27-1.83-9.27-4v-.23a2.39 2.39 0 0 0-.29 1.12c0 2.69 5 5 11.24 5s11.24-2.22 11.24-5-5.02-4.89-11.21-4.89Z" fill="#5ca132"/>
        <path d="M138.55 819.17a1.34 1.34 0 0 1-.65-.17 1.47 1.47 0 0 1-.49-.47 1.21 1.21 0 0 1-.18-.5 1.35 1.35 0 0 1 0-.53 1.4 1.4 0 0 1 .22-.48 1.54 1.54 0 0 1 .4-.36 1.44 1.44 0 0 1 .5-.19 1.19 1.19 0 0 1 .53 0 1.28 1.28 0 0 1 .49.22 1.25 1.25 0 0 1 .36.4 1.34 1.34 0 0 1-.42 1.82h-.08a1.47 1.47 0 0 1-.68.26Zm-8 7.44a1.59 1.59 0 0 0-.07.65 1.71 1.71 0 0 0 .19.63 1.59 1.59 0 0 0 .44.49 1.61 1.61 0 0 0 .59.28 1.63 1.63 0 0 0 .66 0 1.67 1.67 0 0 0 .6-.25 1.58 1.58 0 0 0 .45-.48 1.46 1.46 0 0 0 .23-.61 12.34 12.34 0 0 1 3-6 1.33 1.33 0 0 0 .32-1 1.35 1.35 0 0 0-2.38-.76 22.52 22.52 0 0 0-4 7.07Z" fill="#b8d373"/>
        <path d="M143 739c-7.19 0-14 8.57-14 15.2 0 4.37 4.33 8.79 14 8.79 10.15 0 13.92-5.15 13.92-8.39.01-6.53-7-15.6-13.92-15.6Z" fill="#6eb52c"/>
        <path d="M143 765c-11 0-16-5.39-16-10.78 0-7.6 7.54-17.22 16-17.22 8.09 0 15.95 10.08 15.95 17.62C159 758.61 154.62 765 143 765Zm0-26c-7.19 0-14 8.57-14 15.2 0 4.37 4.33 8.79 14 8.79 10.15 0 13.92-5.15 13.92-8.39.01-6.53-7-15.6-13.92-15.6Z" fill="#19642d"/>
        <path d="M143 751.26h-.85c4.72.19 8.41 1.94 8.41 4s-4.15 4-9.27 4-9.27-1.83-9.27-4v-.23a2.39 2.39 0 0 0-.29 1.12c0 2.69 5 5 11.24 5s11.24-2.22 11.24-5-5.02-4.89-11.21-4.89Z" fill="#5ca132"/>
        <path d="M138.55 744.17a1.34 1.34 0 0 1-.65-.17 1.47 1.47 0 0 1-.49-.47 1.21 1.21 0 0 1-.18-.5 1.35 1.35 0 0 1 0-.53 1.4 1.4 0 0 1 .22-.48 1.54 1.54 0 0 1 .4-.36 1.44 1.44 0 0 1 .5-.19 1.19 1.19 0 0 1 .53 0 1.28 1.28 0 0 1 .49.22 1.25 1.25 0 0 1 .36.4 1.34 1.34 0 0 1-.42 1.82h-.08a1.47 1.47 0 0 1-.68.26Zm-8 7.44a1.59 1.59 0 0 0-.07.65 1.71 1.71 0 0 0 .19.63 1.59 1.59 0 0 0 .44.49 1.61 1.61 0 0 0 .59.28 1.63 1.63 0 0 0 .66 0 1.67 1.67 0 0 0 .6-.25 1.58 1.58 0 0 0 .45-.48 1.46 1.46 0 0 0 .23-.61 12.34 12.34 0 0 1 3-6 1.33 1.33 0 0 0 .32-1 1.35 1.35 0 0 0-2.38-.76 22.52 22.52 0 0 0-4 7.07Z" fill="#b8d373"/>
        <g clip-path="url(#c)">
          <g clip-path="url(#d)">
            <path d="M218.3-63c-.4 2.8-.8 26.8-1 29.6-.3 3.1-.2 26.9.1 30 .3 4.4 1.7 10.8 6.3 11.3 6.5.7 1.5-13.5 8.9-13.8 3.6 0 2.7 19.4 3.3 22.2.7 3.2.2 6.5 3.2 8.1a7.57 7.57 0 0 0 9.4-1.5c2.8-3.6 2-13.7 2.5-14.7.9 2.4 2.7 26 3.7 27.6 1.8 2.9 6.3 3.9 8.3.1.8-1.4 1.1-21.1 1.5-22.5.2 1 10-5.9 10.6 9.4.2 4.1.9 16.6 5.3 18.2 4 1.4 7.5-2 8.4-5.6.7-2.8.3-11.8.3-16.5.3-7.6-2.9-22.6 8.2-15.2 16.2 14.6 5.7-32.6 6.2-37.7.5-5.4.5-24.5-2.4-29" fill="#6eb52c"/>
            <path d="M216.3-63.5a122 122 0 0 0-.6 13.5c-.1 5.1-.2 10.3-.4 15.4-.4 9.5-.3 18.9-.1 28.3.1 5.2.5 12.3 5.4 15.3 2.4 1.5 5.8 1.4 7.5-1.1 1.3-1.9 1.4-4.4 1.7-6.7a18.73 18.73 0 0 1 .8-3.4c.1-.4.1-.1 0-.1.1-.1.1-.2.2-.3a2.09 2.09 0 0 1 .4-.6c-.2.3.2-.2.3-.2-.4.3.6-.3.2-.1.3-.1.5-.1.8-.2-.3.1.1-.1.1 0 0-.1 1.1.4-.3 0 0 0-.5-.2-.2-.1s.1.2-.2-.1c.3.4-.1-.3.1.1.1.2.2.3.3.5s-.1-.3 0-.1.1.2.1.3c.1.5.3 1 .4 1.5 1 4.9.8 10.5 1 15.7a40.62 40.62 0 0 0 1 7.7c1 4.3 5.3 6.4 9.5 5.9a8.84 8.84 0 0 0 7.6-6.8 38.68 38.68 0 0 0 1-9.6 8.6 8.6 0 0 1 .1-1.6v-.4c0 .3-.1.1 0 0s.2-.5-.1.2c-1.2-.2-2.5-.3-3.7-.5a5.77 5.77 0 0 1 .3 1.4c.1.3.1.7.2 1 0 .1.1.8 0 .3 0 .3.1.5.1.8.3 2.4.6 4.8.8 7.2.5 4.8 1 9.7 1.7 14.5a7 7 0 0 0 1.9 4.3c2.3 2.2 6 2.9 8.7.9 1.9-1.4 2.3-3.1 2.6-5.3s.3-4.5.4-6.7c.1-2.9.3-5.8.4-8.7.1-1.1.1-2.2.2-3.3 0-.4.1-.7.1-1.1.1-.7-.1.3 0-.2h-3.9c.8 2.4 3.2 1.4 4.9 1 .2 0 .4-.1.6-.1.6-.1-.4 0 .2 0h.7c.2 0 .8.1.3 0a1.85 1.85 0 0 1 .7.2c.1 0 .2.1.3.1.3.1-.4-.2 0 0 .1.1.7.5.4.2l.6.6s.6 1 .7 1.2a8.28 8.28 0 0 1 .7 2.7 45.53 45.53 0 0 1 .4 5.3 48.27 48.27 0 0 0 1.7 11.3c1.1 3.6 3.1 7.1 7.3 7.2 4.9.1 8.4-4.7 8.9-9.2a94 94 0 0 0 .1-13c0-3.3-.1-6.6-.2-9.9a36.48 36.48 0 0 1 .1-4.7 2.25 2.25 0 0 1 .1-.7c.1-.3.1-.6.2-.9 0-.1.1-.2.1-.3.2-.5-.2.3.1-.1.1-.2.5-.7.2-.4.1-.2.4-.7.2-.3.1-.1.4-.1.1-.1h.6c.1 0 .4.1 0 0 .2 0 .4.1.6.1a12.48 12.48 0 0 1 3.8 2.3c1.8 1.4 3.9 2.7 6.3 2.2a5.59 5.59 0 0 0 3.9-3.7c1.8-4.4 1.3-9.8.9-14.4-.4-5.8-1.2-11.5-2-17.2-.1-.6 0 .1-.1-.5 0-.3-.1-.6-.1-.8-.1-.5-.1-1-.2-1.6-.1-.8-.2-1.7-.3-2.5a45.2 45.2 0 0 1 .2-5.2c.1-3.8.1-7.6-.1-11.4a71.1 71.1 0 0 0-1.3-11.3 10.9 10.9 0 0 0-1.4-4.2c-1.4-2.2-4.9-.2-3.5 2.1a2.09 2.09 0 0 0 .4.6c.1.1.1.3.2.4l.6 2.1c.3 1.5.5 3.1.7 4.7.4 3.9.5 7.8.6 11.8s-.5 8.2 0 12.3c.6 5.3 1.4 9.8 1.9 15.2q.45 4.2.6 8.4c0 1.3.1 2.6 0 3.9a8.6 8.6 0 0 1-.1 1.6 2.77 2.77 0 0 1-.1.9c0 .2-.1 1 0 .4a13.1 13.1 0 0 1-.6 2.7c0 .2-.3.7 0 .1-.1.2-.2.3-.2.5a.76.76 0 0 0-.2.4c-.1.3.4-.3-.1.1s.2-.2-.3.2c-.1.1.5-.1 0 0-.2 0-.7-.1-.1 0-.2 0-.3-.1-.5-.1s-.3-.1-.5-.2c.6.2-.2-.1-.3-.2a18.6 18.6 0 0 1-2.8-2.1 12.35 12.35 0 0 0-4.8-2.2c-3.1-.5-5.4 1.4-6.2 4.3s-.6 6.2-.5 9.3c.1 3.4.1 6.7.2 10.1 0 2.3.1 4.6 0 6.9a24.37 24.37 0 0 1-.1 2.7c-.1.9-.1 1.1-.2 1.9-.5 1.9-1.9 3.9-3.9 4.4a4.48 4.48 0 0 1-1.1.1 1.85 1.85 0 0 1-.7-.2c-.6-.2.3.2-.2-.1a2.23 2.23 0 0 1-.9-1c-1.7-2.8-2.2-6.5-2.5-9.8-.4-3.5-.2-7.2-1-10.7-.7-2.9-2.3-5.7-5.3-6.6a9.61 9.61 0 0 0-5.8.3c-.3.1-.5.1-.8.2s-.5 0 .2 0a2.09 2.09 0 0 1 1.7 1.4 2 2 0 0 0-3.9 0 27.1 27.1 0 0 0-.4 4c-.1 2.3-.2 4.5-.3 6.8s-.2 4.8-.4 7.2c-.1.9-.1 1.9-.2 2.8 0 .3-.1.7-.1 1 0 .1.1-.4 0 0 0 .1-.1.3-.1.4a.35.35 0 0 1-.1.2c0 .1.2-.4.2-.4s-.2.3-.3.4a2.15 2.15 0 0 1-1.2.9 2.86 2.86 0 0 1-2.6-.6c-.2-.2-.6-.9-.8-.9.2.1.1.6.1.2 0-.1-.1-.2-.1-.3l-.3-1.8c-.3-1.8-.5-3.5-.7-5.6-.3-2.5-.5-4.9-.8-7.4s-.5-5-.8-7.4a23.3 23.3 0 0 0-.8-4.6c-.5-1.5-2.9-2.2-3.7-.5-.9 2-.5 4.8-.7 7-.2 2.5-.2 6-2 7.8-2 2.1-6.9 2-7.8-1.1-.5-1.7-.5-3.5-.9-5.2v-.4a6.15 6.15 0 0 0-.1-1.3c-.2-5.3-.1-10.7-.9-15.9-.3-1.9-.8-4.4-2.5-5.5-2.2-1.4-5.2.2-6.5 2s-1.7 4.4-2 6.7c-.2 1.1-.3 2.2-.6 3.3-.1.2-.1.5-.2.7.1-.4 0 .1-.1.2s-.1.2-.2.3.2-.3 0-.1-.1.2-.2.2.3-.1 0 0 0 0 .1 0l-.3.1h-.4a3.28 3.28 0 0 1-1.4-.6 6.58 6.58 0 0 1-2-3.4 25.38 25.38 0 0 1-1.1-6.7c-.5-5.1-.5-10.2-.5-15.3 0-4.4-.1-8.9.2-13.2.6-9.3.4-18.6.9-27.9a3.4 3.4 0 0 1 .1-1c0-.4.1-.8 0-.2.1-1.2-.3-2.3-1.4-2.6a2.11 2.11 0 0 0-2.6 1.4Z" fill="#19642d"/>
          </g>
        </g>
        <g clip-path="url(#e)">
          <g clip-path="url(#f)">
            <path d="M1.5-1.5c5.3 9.5 9.9 13 9.9 13s-2.8 3.8 6.6 9 8.4-5.2 19.2-.9 13-1.9 13-1.9c-.3 2.7-.3 13.7-.7 16.4a10.6 10.6 0 0 0 1.4 7.2c1.6 2.3 3.9 3.6 4.4 6.5.5 2.7-1.2 8.5-2.3 11s-2.2 4.8-2 7.6c.2 2.6 1.8 5.2 4.5 5.6a4.92 4.92 0 0 0 2.9-.6 6.55 6.55 0 0 0 4.9 3.9 6.78 6.78 0 0 0 6-2c.8 3.8.3 7.9 1.2 11.7.8 3.5 2.8 7.2 6.2 8.6 3.9 1.6 7.9-.7 9.8-4.2 2.3-4.2 1.4-9.7.2-14.2a23.76 23.76 0 0 0-6.3-10.4 7.53 7.53 0 0 0 3.3-4.1c1.2-3.9-2.6-15.3-3.1-19.1 1.1 2.7 14.4-4.8 14 3.1-.1 2.9 6.4-4.4 6.4-4.3.4 4.1 5-23.6 8.9-22.8 13.7 1.8 15.2-19.1 15.2-19.1" fill="#6eb52c"/>
            <path d="M.2-.8A62.17 62.17 0 0 0 7.4 9.6a33.41 33.41 0 0 0 3.3 3.2 16 16 0 0 1-.5-2.1c-1.3 1.8-.4 4.4.8 6a17.93 17.93 0 0 0 6.3 5 11.27 11.27 0 0 0 6.1 1.7c3.1-.3 5.2-2.9 8.1-3.4 2.5-.4 4.7.8 7 1.5a14.75 14.75 0 0 0 7.5.7 7.48 7.48 0 0 0 5.7-4.3c-1-.1-2-.3-2.9-.4-.3 3.3-.3 6.6-.4 9.9-.1 1.7-.1 3.5-.2 5.2a20.12 20.12 0 0 0 .1 6c.6 2.5 2.2 4.3 3.9 6.1a6 6 0 0 1 1.7 5.4 36.39 36.39 0 0 1-1.6 6.3c-.8 2.4-2.1 4.6-2.5 7.1a9 9 0 0 0 1.8 7.6 6.25 6.25 0 0 0 7.7 1.4 16 16 0 0 0-2.1-.5 8 8 0 0 0 13.2 2.2 23.35 23.35 0 0 1-2.5-.7c1 4.8.2 9.7 2.1 14.4 1.5 3.6 4.3 7 8.4 7.5s7.9-2.2 9.6-5.8c2-4.1 1.6-8.8.6-13a26.85 26.85 0 0 0-7.1-13l-.3 2.4a8.29 8.29 0 0 0 4.2-6.3 25.15 25.15 0 0 0-.5-6.1c-.8-4.2-2.2-8.2-2.8-12.4l-2.7 1.2c.8 1.8 3.3 1.4 4.9 1.1a34.41 34.41 0 0 1 6.3-1 4.48 4.48 0 0 1 1.2.1 1.42 1.42 0 0 1 .6.2s.3.2.3.1c.6.5.5 1.2.6 2.1a2 2 0 0 0 2 2 4.32 4.32 0 0 0 2.6-1.3 32 32 0 0 0 2.7-2.5l1.1-1.1c.2-.2.8-.6.2-.3-.8-.4-1.5-.9-2.3-1.3.1.9.4 1.7 1.4 1.9a1.67 1.67 0 0 0 1.7-1 21.34 21.34 0 0 0 1.3-4.3c1.2-4.6 2.2-9.2 3.8-13.6a14.45 14.45 0 0 1 1.1-2.6c.2-.3.3-.7.5-1 .1-.1.2-.3.3-.4l.2-.2c.1-.1.3-.4 0-.1.2-.2-.1 0 0 0h-.4a.75.75 0 0 1 .5.1 2 2 0 0 1 .7.1 10.92 10.92 0 0 0 4-.4c4.9-1.3 7.9-5.8 9.7-10.4a33.82 33.82 0 0 0 2.2-9.9c.1-1.9-2.9-1.9-3 0a1.27 1.27 0 0 1-.1.6c0 .2-.1.4-.1.7v.1c0 .2-.1.3-.1.5a43.71 43.71 0 0 1-1.2 5.2c-1.2 3.8-3.1 8-6.9 9.8a9.47 9.47 0 0 1-3 .8c-1.1.1-2.1-.3-3.2 0-1.4.3-2.2 1.7-2.8 2.9a58.1 58.1 0 0 0-4 12.2c-.6 2.2-1.1 4.3-1.7 6.5-.2.6-.4 1.3-.6 1.9-.1.4-.1.1 0 0s0 .2-.1.2c.1 0 .2-.2.2-.2l2.2.3c0 .1.1.2.1.3v.1a1.59 1.59 0 0 0-2.3-1.3 3.84 3.84 0 0 0-1.1 1.1l-2.1 2.1a15.58 15.58 0 0 1-2 1.6c-.2.1-.1.1-.2.1s1.4.5.7.1c0 0 .6.7.5.7v-.5c0-.4-.1-.7-.1-1.1-.9-4.8-6.8-3.7-10.2-3a17.67 17.67 0 0 1-2.9.5h-1c-.2 0 .1.1.1.1-.8-1.7-3-.4-2.7 1.2.6 3.7 1.8 7.3 2.5 10.9s1.9 8.3-2 10.6a1.57 1.57 0 0 0-.3 2.4 22.58 22.58 0 0 1 5.8 9.6c1 3.4 1.8 7.2.9 10.8-.7 3.2-3.3 6.5-6.8 6.4s-5.6-3.2-6.7-6c-1.6-4.4-.9-9.2-1.9-13.7a1.54 1.54 0 0 0-2.5-.7c-2.8 2.7-6.8 1.8-8.5-1.6a1.49 1.49 0 0 0-2.1-.5c-2.2 1.1-4.2-.4-4.8-2.5-.8-2.4.2-5 1.1-7.2 1.5-3.5 2.9-7.4 2.9-11.3a8.54 8.54 0 0 0-2-5.4c-1.4-1.7-3.2-3.1-3.8-5.4a16.32 16.32 0 0 1-.1-5.4c.1-1.5.1-3.1.2-4.6.1-3.5.1-7 .4-10.5.2-1.8-2.4-1.9-2.9-.4.2-.5.1-.2 0 0s-.1.2-.2.3c-.2.4.1-.1-.2.3a5.13 5.13 0 0 1-2.6 1.5c-4.5 1.1-8.6-2.2-13.1-2.3-3.1-.1-5.2 1.6-7.9 2.9-3.2 1.6-7.3-1.1-9.8-3.2a7 7 0 0 1-2-2.2 3 3 0 0 1-.4-.8 1.76 1.76 0 0 1-.1-.6c0-.2.1-.8 0-.4 0-.2.1-.3.1-.5 0 .1-.1.2.1-.1a1.6 1.6 0 0 0-.5-2.1c.7.5-.4-.3-.5-.5-.7-.7-1.4-1.4-2.1-2.2A54.78 54.78 0 0 1 2.5-2C1.9-3.9-.7-2.4.2-.8Z" fill="#19642d"/>
          </g>
        </g>
        <g clip-path="url(#g)">
          <g clip-path="url(#h)">
            <path d="M1576.84-1.5c5.3 9.5 9.9 13 9.9 13s-2.8 3.8 6.6 9 8.4-5.2 19.2-.9 13-1.9 13-1.9c-.3 2.7-.3 13.7-.7 16.4a10.6 10.6 0 0 0 1.4 7.2c1.6 2.3 3.9 3.6 4.4 6.5.5 2.7-1.2 8.5-2.3 11s-2.2 4.8-2 7.6c.2 2.6 1.8 5.2 4.5 5.6a4.92 4.92 0 0 0 2.9-.6 6.55 6.55 0 0 0 4.9 3.9 6.78 6.78 0 0 0 6-2c.8 3.8.3 7.9 1.2 11.7.8 3.5 2.8 7.2 6.2 8.6 3.9 1.6 7.9-.7 9.8-4.2 2.3-4.2 1.4-9.7.2-14.2a23.76 23.76 0 0 0-6.3-10.4 7.53 7.53 0 0 0 3.3-4.1c1.2-3.9-2.6-15.3-3.1-19.1 1.1 2.7 14.4-4.8 14 3.1-.1 2.9 6.4-4.4 6.4-4.3.4 4.1 5-23.6 8.9-22.8 13.7 1.8 15.2-19.1 15.2-19.1" fill="#6eb52c"/>
            <path d="M1575.54-.8a62.17 62.17 0 0 0 7.2 10.4 33.41 33.41 0 0 0 3.3 3.2 16 16 0 0 1-.5-2.1c-1.3 1.8-.4 4.4.8 6a17.93 17.93 0 0 0 6.3 5 11.27 11.27 0 0 0 6.1 1.7c3.1-.3 5.2-2.9 8.1-3.4 2.5-.4 4.7.8 7 1.5a14.75 14.75 0 0 0 7.5.7 7.48 7.48 0 0 0 5.7-4.3c-1-.1-2-.3-2.9-.4-.3 3.3-.3 6.6-.4 9.9-.1 1.7-.1 3.5-.2 5.2a20.12 20.12 0 0 0 .1 6c.6 2.5 2.2 4.3 3.9 6.1a6 6 0 0 1 1.7 5.4 36.39 36.39 0 0 1-1.6 6.3c-.8 2.4-2.1 4.6-2.5 7.1a9 9 0 0 0 1.8 7.6 6.25 6.25 0 0 0 7.7 1.4 16 16 0 0 0-2.1-.5 8 8 0 0 0 13.2 2.2 23.35 23.35 0 0 1-2.5-.7c1 4.8.2 9.7 2.1 14.4 1.5 3.6 4.3 7 8.4 7.5s7.9-2.2 9.6-5.8c2-4.1 1.6-8.8.6-13a26.85 26.85 0 0 0-7.1-13l-.3 2.4a8.29 8.29 0 0 0 4.2-6.3 25.15 25.15 0 0 0-.5-6.1c-.8-4.2-2.2-8.2-2.8-12.4l-2.7 1.2c.8 1.8 3.3 1.4 4.9 1.1a34.41 34.41 0 0 1 6.3-1 4.48 4.48 0 0 1 1.2.1 1.42 1.42 0 0 1 .6.2s.3.2.3.1c.6.5.5 1.2.6 2.1a2 2 0 0 0 2 2 4.32 4.32 0 0 0 2.6-1.3 32 32 0 0 0 2.7-2.5l1.1-1.1c.2-.2.8-.6.2-.3-.8-.4-1.5-.9-2.3-1.3.1.9.4 1.7 1.4 1.9a1.67 1.67 0 0 0 1.7-1 21.34 21.34 0 0 0 1.3-4.3c1.2-4.6 2.2-9.2 3.8-13.6a14.45 14.45 0 0 1 1.1-2.6c.2-.3.3-.7.5-1 .1-.1.2-.3.3-.4l.2-.2c.1-.1.3-.4 0-.1.2-.2-.1 0 0 0h-.4a.75.75 0 0 1 .5.1 2 2 0 0 1 .7.1 10.92 10.92 0 0 0 4-.4c4.9-1.3 7.9-5.8 9.7-10.4a33.82 33.82 0 0 0 2.2-9.9c.1-1.9-2.9-1.9-3 0a1.27 1.27 0 0 1-.1.6c0 .2-.1.4-.1.7v.1c0 .2-.1.3-.1.5a43.71 43.71 0 0 1-1.2 5.2c-1.2 3.8-3.1 8-6.9 9.8a9.47 9.47 0 0 1-3 .8c-1.1.1-2.1-.3-3.2 0-1.4.3-2.2 1.7-2.8 2.9a58.1 58.1 0 0 0-4 12.2c-.6 2.2-1.1 4.3-1.7 6.5-.2.6-.4 1.3-.6 1.9-.1.4-.1.1 0 0s0 .2-.1.2c.1 0 .2-.2.2-.2l2.2.3c0 .1.1.2.1.3v.1a1.59 1.59 0 0 0-2.3-1.3 3.84 3.84 0 0 0-1.1 1.1l-2.1 2.1a15.58 15.58 0 0 1-2 1.6c-.2.1-.1.1-.2.1s1.4.5.7.1c0 0 .6.7.5.7v-.5c0-.4-.1-.7-.1-1.1-.9-4.8-6.8-3.7-10.2-3a17.67 17.67 0 0 1-2.9.5h-1c-.2 0 .1.1.1.1-.8-1.7-3-.4-2.7 1.2.6 3.7 1.8 7.3 2.5 10.9s1.9 8.3-2 10.6a1.57 1.57 0 0 0-.3 2.4 22.58 22.58 0 0 1 5.8 9.6c1 3.4 1.8 7.2.9 10.8-.7 3.2-3.3 6.5-6.8 6.4s-5.6-3.2-6.7-6c-1.6-4.4-.9-9.2-1.9-13.7a1.54 1.54 0 0 0-2.5-.7c-2.8 2.7-6.8 1.8-8.5-1.6a1.49 1.49 0 0 0-2.1-.5c-2.2 1.1-4.2-.4-4.8-2.5-.8-2.4.2-5 1.1-7.2 1.5-3.5 2.9-7.4 2.9-11.3a8.54 8.54 0 0 0-2-5.4c-1.4-1.7-3.2-3.1-3.8-5.4a16.32 16.32 0 0 1-.1-5.4c.1-1.5.1-3.1.2-4.6.1-3.5.1-7 .4-10.5.2-1.8-2.4-1.9-2.9-.4.2-.5.1-.2 0 0s-.1.2-.2.3c-.2.4.1-.1-.2.3a5.13 5.13 0 0 1-2.6 1.5c-4.5 1.1-8.6-2.2-13.1-2.3-3.1-.1-5.2 1.6-7.9 2.9-3.2 1.6-7.3-1.1-9.8-3.2a7 7 0 0 1-2-2.2 3 3 0 0 1-.4-.8 1.76 1.76 0 0 1-.1-.6c0-.2.1-.8 0-.4 0-.2.1-.3.1-.5 0 .1-.1.2.1-.1a1.6 1.6 0 0 0-.5-2.1c.7.5-.4-.3-.5-.5-.7-.7-1.4-1.4-2.1-2.2a54.78 54.78 0 0 1-6.7-9.8c-.6-1.9-3.2-.4-2.3 1.2Z" fill="#19642d"/>
          </g>
        </g>
        <text transform="translate(182.22 316.34)" font-size="34" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">Game design</text>
        <text transform="translate(182.22 389)" font-size="34" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">Development</text>
        <text transform="translate(182.22 561.98)" font-size="34" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">Art &amp; Design</text>
        <text transform="translate(182.22 689.17)" font-size="34" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">Story</text>
        <text transform="translate(182.22 761.94)" font-size="34" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">Copywriter</text>
        <text transform="translate(182.22 840)" font-size="34" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">Test</text>
        <text transform="translate(182.22 911.38)" font-size="34" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">Music</text>
        <text transform="translate(498.16 317.01)" font-size="28" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">Carlos Pisarello, Yuri Scarbaci, Mariano Echavarría</text>
        <text transform="translate(498.16 563.69)" font-size="28" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">Carlos Pisarello, Irene López, Juan Hernández, Mariana Beldi, <tspan x="0" y="33.6">Florencia Grassi</tspan></text>
        <text transform="translate(498.16 382.95)" font-size="28" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">Juan Cruz Fortunatti, Luciana Moll, Yuri Scarbaci, <tspan x="0" y="33.6">Freddy Ramírez, Mariano Echavarría, </tspan><tspan x="0" y="67.2">Santiago Vallejo, José Alejandro Sulbaran</tspan></text>
        <text transform="translate(498.16 683.34)" font-size="28" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">Carlos Pisarello, Yuri Scarbaci, Freddy Ramírez</text>
        <text transform="translate(498.16 756.22)" font-size="28" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">Inés Domínguez</text>
        <text transform="translate(498.16 831.98)" font-size="28" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">You. Just now!</text>
        <text transform="translate(498.16 910.69)" font-size="28" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">Santiago Vallejo, Mariano Echavarría</text>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.13 90.07" width="200" height="100" x="800" y="950">
        <defs>
          <radialGradient id="ac" cx="565.04" cy="976.53" r=".62" gradientTransform="matrix(312.16 0 0 -105.25 -175517.49 103778.52)" gradientUnits="userSpaceOnUse">
            <stop offset=".28" stop-color="#5ca132"/>
            <stop offset="1" stop-color="#6eb52c"/>
          </radialGradient>
          <linearGradient id="bc" x1="896.21" y1="235.1" x2="845.6" y2="48.27" gradientTransform="matrix(1 0 0 -1 -730.44 160.94)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#19642d"/>
            <stop offset=".26" stop-color="#5ca132"/>
            <stop offset="1" stop-color="#19642d"/>
          </linearGradient>
        </defs>
        <g className="clickable" onClick={() => history.push('/')} data-name="Yes Button">
          <path d="M730.44 958.51A3.56 3.56 0 0 1 734 955h48l5.86.72h.21l6.41-.72H994a3.56 3.56 0 0 1 3.55 3.56v69.81a14.71 14.71 0 0 1-.93 3.45 2.88 2.88 0 0 0-.09.46 2.86 2.86 0 0 0 .13 1.36 9.66 9.66 0 0 1 .89 3v4.87A3.55 3.55 0 0 1 994 1045H734a3.55 3.55 0 0 1-3.55-3.56Z" transform="translate(-730.44 -954.95)" fill="url(#ac)"/>
          <rect x="6.96" y="7.62" width="252.8" height="75.74" rx="3.56" fill="url(#bc)"/>
          <path d="M6.27 36.11c9.28-5.92 9.86 9.52 17 20.66s36.24 17.45 24.25 26.34c-28.47 1.27-35.14 7-42-2.81a4.08 4.08 0 0 1-.71-2.14C4.13 63.28 3.1 38.13 6.27 36.11Z" fill="#4d4646" fill-opacity=".22"/>
          <path d="M12.16 53.88c5.07-3.24 5.39 5.2 9.28 11.29s19.81 9.54 13.25 14.4c-15.12.68-19 3.65-22.64-1.1a3.79 3.79 0 0 1-.72-2.14c-.36-8.18-.86-21.37.83-22.45Z" fill="#4d4646" fill-opacity=".22"/>
          <path d="M255.19 36.9c-5.22 3-5.16-5.43-8.77-11.69s-19.37-10.41-12.61-15c16.08 0 19.59-3.15 23.2 3.11 0 8.06 0 22.53-1.82 23.58Z" fill="#fff" fill-opacity=".22"/>
          <path d="M252.81 11.23c0 .75-.65.36-1.46.36s-1.46.39-1.46-.36a1.46 1.46 0 0 1 2.92 0ZM256.21 16.67c-1.43.5-1.09-.92-1.58-2.35s-1.64-2.33-.21-2.83a2.74 2.74 0 1 1 1.79 5.18Z" fill="#fff" fill-opacity=".78"/>
          <text transform="translate(65.62 59.91)" font-size="40.47" fill="#fff" font-family="MochiyPopPOne-Regular, Mochiy Pop P One">Home</text>
        </g>
      </svg>
      </svg>
    </div>
  )
}
