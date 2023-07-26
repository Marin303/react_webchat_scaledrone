import React, { useState } from "react";

const Input = ({onSendMessage}) => {
  
  const [message, setMessage] = useState('')
  const [enterPressed, setEnterPressed] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();
    setEnterPressed(true)
    onSendMessage(message);
    setMessage('')
    setTimeout(() => setEnterPressed(false), 100);
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
        <button className={enterPressed ? 'active' : ''}>Send</button>
      </form>
    </div>
  )
}

export default Input;
