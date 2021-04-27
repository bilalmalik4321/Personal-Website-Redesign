/*
* Author: Bilal Malik
* Date: April 25, 2021
* Description: The is the useWindowSize custom hook, use it to determine width
* of height constraints, anywhere throughout the app by calling 
* const { width, height } = useWindowSize();
*/

import { useEffect, useState } from "react";

// the return type of the useWindowSize function and variable
interface IWindowSize {
    width: number,
    height: number
}

// Hook
export const useWindowSize = (): IWindowSize => {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<IWindowSize>({
        width: 0,
        height: 0,
    });

    
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }