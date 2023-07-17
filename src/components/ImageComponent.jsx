import { useState, useEffect } from 'react';

// Stylesheet
import '../styles/ImageComponent.css';

const ImageComponent = ({userText,selectedImage}) => {
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });

  const handleTextDrag = (e) => {
    e.preventDefault();

    const textElement = document.getElementById('text-overlay');
    const container = document.getElementById('image-container');
    const containerRect = container.getBoundingClientRect();

    const initialX = e.clientX;
    const initialY = e.clientY;
    const initialTextX = textPosition.x;
    const initialTextY = textPosition.y;

    const handleMouseMove = (e) => {
      const newX = initialTextX + (e.clientX - initialX);
      const newY = initialTextY + (e.clientY - initialY);

      const minX = 0;
      const minY = 0;
      const maxX = containerRect.width - textElement.offsetWidth;
      const maxY = containerRect.height - textElement.offsetHeight;

      const clampedX = Math.max(minX, Math.min(newX, maxX));
      const clampedY = Math.max(minY, Math.min(newY, maxY));

      setTextPosition({ x: clampedX, y: clampedY });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById('image-container');
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const containerRect = container.getBoundingClientRect();

      const textElement = document.getElementById('text-overlay');

      const newTextX = (textPosition.x / containerWidth) * containerRect.width;
      const newTextY = (textPosition.y / containerHeight) * containerRect.height;

      const maxX = containerRect.width - textElement.offsetWidth;
      const maxY = containerRect.height - textElement.offsetHeight;
      const clampedX = Math.max(0, Math.min(newTextX, maxX));
      const clampedY = Math.max(0, Math.min(newTextY, maxY));

      // Update the position of the text
      setTextPosition({ x: clampedX, y: clampedY });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [textPosition]);

  return (
    <div className="image-container" id='image-container'>
      <img src={selectedImage.src} alt="Your" className="image" />
      <div
        className="text-overlay"
        id="text-overlay"
        style={{ top: `${textPosition.y}px`, left: `${textPosition.x}px` }}
        onMouseDown={handleTextDrag}
      >
        {userText}
      </div>
      <div className="total-amount">Total $1337</div>
    </div>
  );
};

export default ImageComponent;
