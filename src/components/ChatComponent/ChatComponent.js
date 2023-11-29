// ChatComponent.jsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';

const socket = io('http://localhost:3000'); // Điều chỉnh URL tương ứng với server của bạn

// Styled components
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 8000px;
 
  width: 700px;
  border: 1px solid #ccc;
  margin: 20px;
  overflow-y: scroll;
`;

const Message = styled.div`
  padding: 10px;
  margin: 5px;
  background-color: ${props => props.sender === 'user' ? '#f2f2f2' : '#e6f7ff'};
  border-radius: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ccc;
`;

const InputBox = styled.input`
  flex: 1;
  padding: 8px;
`;

const SendButton = styled.button`
  margin-left: 10px;
  padding: 8px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState('');

  useEffect(() => {
    // Lắng nghe sự kiện khi có tin nhắn mới từ server
    socket.on('chat message', (msg) => {
      setMessages([...messages, msg]);
      console.log('messages', messages, msg)
    });

    // Ngắt kết nối khi component unmount

  }, [messages]);

  const sendMessage = () => {
    socket.emit('chat message', { text: input, sender: 'user' });
    setInput('');
  };

  return (
    <ChatContainer>
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender}>

          Guess: {msg.text}
        </Message>
      ))}
      <InputContainer>
        <InputBox
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SendButton onClick={sendMessage}>
          Send
        </SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatComponent;
