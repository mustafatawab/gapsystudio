import React, { useState, useRef, useEffect } from 'react';

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const answerRef = useRef(null);
  
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };
  
    useEffect(() => {
      setHeight(isOpen ? answerRef.current.scrollHeight : 0);
    }, [isOpen]);
  
    return (
      <div className={`faq-item`}>
        <div className="faq-question" onClick={toggleOpen}>
          <h3 className='capitalize'>{question}</h3>
          <span className="icon">{isOpen ? '−' : '+'}</span>
        </div>
        <div
          ref={answerRef}
          className="faq-answer"
          style={{
            height: `${height}px`,
            opacity: isOpen ? 1 : 0,
            transition: 'height 0.3s ease, opacity 0.3s ease',
          }}
        >
          <p>{answer}</p>
        </div>
      </div>
    );
  }


  export default FAQItem