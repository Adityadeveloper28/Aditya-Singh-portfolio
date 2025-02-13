import React, { useState, useEffect } from "react";
import { SquareChevronUp } from "lucide-react";

const ToptoBottom = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-2 rounded shadow-lg hover:bg-blue-700 transition-all z-50 animate-pulse cursor-pointer"
        >
          <SquareChevronUp size={28} />
        </button>
      )}
    </>
  );
};

export default ToptoBottom;
