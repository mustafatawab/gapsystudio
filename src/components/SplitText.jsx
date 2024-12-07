import React, { useEffect, useRef, useState } from 'react';
import '../css/Header2.css';

const SplitText = ({ text, isActive, duration = 500 }) => {
  const textRef = useRef(null);
  const [splitLetters, setSplitLetters] = useState([]);

  // Split the text into individual letters and add necessary classes for animation
  const splitText = (text) => {
    const letters = text.split('').map((char, index) => ({
      char,
      id: index,
      transform: isActive ? 'translate(0px, 0%)' : 'translate(0px, 100%)', // Default to bottom position for non-active
    }));
    setSplitLetters(letters);
  };

  useEffect(() => {
    if (textRef.current) {
      splitText(text);
    }
  }, [text, isActive]); // Re-run on text or isActive change

  // Animate the letters when the link is active
  useEffect(() => {
    if (isActive) {
      // Triggering animation on active
      setSplitLetters((prevLetters) =>
        prevLetters.map((letter) => ({
          ...letter,
          transform: 'translate(0px, 0%)', // Move letters to default position
        }))
      );
    } else {
      // Resetting the animation for inactive state
      setSplitLetters((prevLetters) =>
        prevLetters.map((letter) => ({
          ...letter,
          transform: 'translate(0px, 100%)', // Move letters out of view
        }))
      );
    }
  }, [isActive]);

  return (
    <span className="styles_swirl_text__5h1Cp" aria-hidden="true">
      <span className="styles_start_text__5j_T1 v-split-text" translate="no" aria-label={text}>
        <span className="v-split-text__word inblock" aria-hidden="true">
          {splitLetters.map((letter) => (
            <span
              key={letter.id}
              className="v-split-text__letter inblock2"
              style={{ display: 'inline-block', transform: letter.transform }}
            >
              {letter.char}
            </span>
          ))}
        </span>
      </span>
      <span className="styles_end_text__0mD8j v-split-text" translate="no" aria-label={text}>
        <span className="v-split-text__word inblock" aria-hidden="true">
          {splitLetters.map((letter) => (
            <span
              key={letter.id}
              className="v-split-text__letter inblock3"
              style={{ display: 'inline-block', transform: letter.transform }}
            >
              {letter.char}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
};

export default SplitText;
