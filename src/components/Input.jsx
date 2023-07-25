import React, { useState } from "react";

const Input = ({onSendMessage}) => {
  
const [message, setMessage] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage('')
  }

    return (
      <div className="InputForm">
        <form onSubmit={onSubmit}>
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            type="text"
            placeholder="Enter your message and press ENTER"
            autoFocus={true}
          />
          <button>Send</button>
        </form>
      </div>
    )
}

export default Input;
