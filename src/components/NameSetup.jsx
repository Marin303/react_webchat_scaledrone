import React, { useState } from "react";

const NameSetup = (usernameHandler) => {
  
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    usernameHandler.handleSubmitForm(username);
  };

  return (
    <div className="nameSetupWrapper">
      <div className="NameSetup">
        <h1>Enter your name to join the chat</h1>
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="Enter chat name - max 20 characters"
            value={username}
            onChange={handleUsernameChange}
            maxLength={20}
          />
          <button type="submit">Join</button>
        </form>
      </div>
    </div>
  );
}

export default NameSetup;
