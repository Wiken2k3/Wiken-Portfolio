import React from 'react';
import './BlobBackground3.css';

export default function BlobBackground3() {
  return (
    <div className="blob-bg3">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="blob-svg3"
      >
        <defs>
          <style>{`
            @keyframes rotate {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .blob1 { animation: rotate 20s linear infinite; transform-origin: 13px 25px; }
            .blob2 { animation: rotate 15s linear infinite; transform-origin: 84px 93px; }
          `}</style>
        </defs>
        <path
          className="blob1"
          fill="#3FA9F5"
          d="M37-5C25.1-14.7,5.7-19.1-9.2-10C-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
        />
        <path
          className="blob2"
          fill="#FFB347"
          d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4,0.8c-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6
          c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6z"
        />
      </svg>
    </div>
  );
}