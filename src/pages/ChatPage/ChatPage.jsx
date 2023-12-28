import React from 'react';
import styled from 'styled-components';
import ChatComponent from '../../components/ChatComponent/ChatComponent';

// Styled component for the greeting
const Greeting = styled.h1`
  color: #333; /* Màu chữ */
  font-size: 24px; /* Kích thước chữ */
  font-family: 'Arial', sans-serif; /* Font chữ */
  text-align: center; /* Căn giữa văn bản */
  margin-bottom: 20px; /* Khoảng cách dưới */
`;

const ChatPage = () => {
  return (
    <div>
      <Greeting>Xin chào khách hàng</Greeting>
      <ChatComponent />
    </div>
  );
};

export default ChatPage;
