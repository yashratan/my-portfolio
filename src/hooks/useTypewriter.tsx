import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        // Typing
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (!isDeleting && currentIndex === text.length) {
        // Finished typing, pause before deleting
        setIsComplete(true);
        setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Pause for 2 seconds
      } else if (isDeleting && currentIndex > 0) {
        // Deleting
        setDisplayText(text.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (isDeleting && currentIndex === 0) {
        // Finished deleting, pause before starting again
        setIsDeleting(false);
        setIsComplete(false);
        setTimeout(() => {
          setCurrentIndex(0);
        }, 1000); // Pause for 1 second
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, speed, isComplete]);

  return { displayText, isComplete };
};