import React, { useState } from "react";

function ImageMagnifier({
  src,
  width,
  height,
  magnifierHeight = 190,
  magnifieWidth = 190,
  zoomLevel = 2.2,
}: {
  src: string;
  width?: string;
  height?: string;
  magnifierHeight?: number;
  magnifieWidth?: number;
  zoomLevel?: number;
}) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);

  return (
    // the container
    <div
      className={`relative w-[${width}], h-[${height}], rounded-sm border-2 border-slate-400`}
    >
      <img
        onMouseEnter={(e) => {
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();

          setSize([width, height]);

          setShowMagnifier(true);
        }}
        onMouseLeave={(e) => {
          setShowMagnifier(false);
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          const x = e.pageX - left - window.scrollX;
          const y = e.pageY - top - window.scrollY;

          setXY([x, y]);
        }}
        src={src}
        style={{
          height: height,
          width: width,
          cursor: "zoom-in",
          objectFit: "cover",
        }}
        alt={"img"}
      />

      <div
        className="magnifier"
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",
          pointerEvents: "none",
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,
          opacity: 1,
          border: "2px solid rgb(148 163 184)",
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `${imgWidth * zoomLevel}px, ${
            imgHeight * zoomLevel
          }px`,
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
          cursor: "none",
        }}
      ></div>
    </div>
  );
}

export default ImageMagnifier;
