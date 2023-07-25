import React, { FormEvent, useState } from "react";

interface InputProps {
  onSendMessage: (message: string) => void;
}

const Input: React.FC<InputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState<string>("");

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage("");
  };

  return (
    <div className="Input">
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="Enter chat message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Input;
