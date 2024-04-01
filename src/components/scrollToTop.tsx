import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import Button from "./button";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Calculate how far the user has scrolled from the top
      const scrolled = window.scrollY;
      // Calculate the height of the viewport
      const viewportHeight = window.innerHeight;
      // Calculate the total height of the document
      const totalHeight = document.body.scrollHeight;

      // If the user has scrolled down to the bottom of the page or beyond 75% of the viewport height, show the button
      setIsVisible(scrolled > viewportHeight * 1 || scrolled > totalHeight - viewportHeight);
    };

    // Listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // Clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Handles the animation when scrolling to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 rounded-full p-4 outline-none bg-Chocolate transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <ChevronUp style={{ color: "white" }} />
    </button>
  );
};

export default ScrollToTopButton;