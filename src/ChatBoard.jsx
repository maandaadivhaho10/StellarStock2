import React, { useState } from 'react';
import './ChatBoard.css';

const ChatBoard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    "How do I track my order?",
    "What's your return policy?",
    "How do I contact support?",
    "Where is my nearest store?"
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setActiveQuestion(null);
    }
  };

  const handleQuestionClick = (question) => {
    setActiveQuestion(question);
  };

  return (
    <div className={`chat-board ${isOpen ? 'open' : ''}`}>
      <button className="chat-toggle" onClick={toggleChat}>
        {isOpen ? '×' : '?'}
      </button>
      
      {isOpen && (
        <div className="chat-content">
          <h3>Frequently Asked Questions</h3>
          <ul className="questions-list">
            {questions.map((question, index) => (
              <li 
                key={index}
                className={activeQuestion === question ? 'active' : ''}
                onClick={() => handleQuestionClick(question)}
              >
                {question}
              </li>
            ))}
          </ul>
          
          {activeQuestion && (
            <div className="answer">
              <p>{getAnswer(activeQuestion)}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Simple answer mapping
const getAnswer = (question) => {
  const answers = {
    "How do I track my order?": "You can track your order in the 'Track Order' section of our website.",
    "What's your return policy?": "We accept returns within 30 days of purchase with original receipt.",
    "How do I contact support?": "Please email support@stellarstock.com or call 0800-123-456.",
    "Where is my nearest store?": "Use our store locator tool in the footer to find your nearest location."
  };
  return answers[question] || "Please contact support for more information.";
};

export default ChatBoard;
