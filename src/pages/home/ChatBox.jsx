// ChatbotWindow.js
import React, { useState } from 'react';
import './ChatbotWindow.css';
import { callChatbot } from '../../services';

const ChatbotWindow = () => {
    const [messagesByBot, setMessagesByBot] = useState([]);
    const [messagesByUser, setMessagesByUser] = useState([]);
    const [isMinimized, setIsMinimized] = useState(false);
    const [inputText, setInputText] = useState('');

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        // Send user input to server
        // const response = await fetch('http://localhost:3000/chatbot', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ message: inputText }),
        // });
        // const data = await response.json();

        // Update chat display with response
        //    setMessages([...messages, { sender: 'user', text: inputText }]);
        setMessagesByUser([...messagesByUser, { sender: 'user', text: inputText }]);
        const botResponse = await callChatbot(inputText);
        setMessagesByBot([...messagesByBot, { sender: 'bot', text: botResponse.data.message }]);
        setInputText('');
    };

    return (
        <>
            <div className={` ${isMinimized ? 'minimized' : ''}`}>
                <div className="header">
                    <span>Chat</span>
                    <button className="minimize-button" onClick={toggleMinimize}>
                        {isMinimized ? 'Maximize' : 'Minimize'}
                    </button>
                </div>
            </div>
            {!isMinimized && (
                <div className="chatbot-window">
                    <div className="messages">
                        {messagesByBot.map((msg, index) => (
                            <div>
                                <div key={`${index}-in`} className={`message ${msg.sender} in ri`}>
                                    {messagesByUser[index].text}
                                </div>
                                <div className="bot-res">
                                    <div className="li">
                                        <div key={index} className={`message ${msg.sender} `}>
                                            {msg.text}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className="input-form">
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Type a message..."
                            className="input-field"
                        />
                        <button type="submit" className="send-button">
                            Send
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default ChatbotWindow;
