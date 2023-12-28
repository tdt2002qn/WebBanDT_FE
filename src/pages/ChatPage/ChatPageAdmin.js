import React from 'react';
import ChatComponentAdmin from '../../components/ChatComponent/ChatComponentAdmin';
import styled from 'styled-components';

const Greeting = styled.h1`
  color: #333; /* Màu chữ */
  font-size: 24px; /* Kích thước chữ */
  font-family: 'Arial', sans-serif; /* Font chữ */
  text-align: center; /* Căn giữa văn bản */
  margin-bottom: 20px; /* Khoảng cách dưới */
`;
const ChatPageAdmin = () => {
  return (
    <div>
      <Greeting>Xin chào Admin</Greeting>
      <ChatComponentAdmin />
    </div>
  );
};

export default ChatPageAdmin;
