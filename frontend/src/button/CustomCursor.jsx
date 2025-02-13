import React, { useEffect, useState } from "react";
import { MousePointer2, Pointer } from "lucide-react"; // Default & Click Cursor

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if the hovered element has 'cursor-pointer' class
      if (e.target.closest(".cursor-pointer")) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed w-6 h-6 flex items-center justify-center pointer-events-none z-100 transition-transform duration-75"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {isHoveringClickable ? (
        <Pointer size={24} className="text-yellow-400 bg-yello-400 drop-shadow-lg" />
      ) : (
        <MousePointer2 size={24} className="text-white drop-shadow-lg" />
      )}
    </div>
  );
};

export default CustomCursor;
