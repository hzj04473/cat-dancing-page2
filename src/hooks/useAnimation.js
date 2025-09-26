import { useState, useCallback } from 'react';

function useAnimation() {
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev);
  }, []);

  const startAnimation = useCallback(() => {
    setIsAnimating(true);
  }, []);

  const stopAnimation = useCallback(() => {
    setIsAnimating(false);
  }, []);

  return {
    isAnimating,
    toggleAnimation,
    startAnimation,
    stopAnimation
  };
}

export default useAnimation;