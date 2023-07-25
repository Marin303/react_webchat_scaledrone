import React, { useState } from 'react';
import './App.css';
import ChatContainer from './components/ChatContainer';
import NameSetup from './components/NameSetup';

const App: React.FC = () => {
  const [username, setUsername] = useState('');

  return (
    <>
      {
        username === '' ? 
          <NameSetup setUsername={setUsername}/> :
          <ChatContainer username={username} />
      }
    </>
  );
};

export default App;
