import React, { useState, FormEvent } from "react";

interface NameSetupProps {
  setUsername: (username: string) => void;
}

const NameSetup: React.FC<NameSetupProps> = ({ setUsername }) => {
  const [localUsername, setLocalUsername] = useState("");

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    setUsername(localUsername);
  };

  return (
    <div className="nameSetupWrapper">
      <div className="NameSetup">
        <h1>Enter your name to join the chat</h1>
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="Enter chat name - max 20 characters"
            value={localUsername}
            onChange={e => setLocalUsername(e.target.value)}
            maxLength={20}
          />
          <button type="submit">Join</button>
        </form>
      </div>
    </div>
  );
}

export default NameSetup;
