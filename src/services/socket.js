
import io from 'socket.io-client';

const socket = io('http://192.168.189.99:3000');

export const getSocket = () => {
  return socket;
};

export const disconnectSocket = () => {
  if (socket.connected) {
    socket.disconnect();
  }
};

export default socket;