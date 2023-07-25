import React from "react";

interface MessageProps {
  messages: any[];
  thisMember: any;
}

const Messages: React.FC<MessageProps> = ({ messages, thisMember }) => {

  const renderMessage = (message: any, thisMember: any) => {
    const { member, data } = message;
    const senderMessage = member.id === thisMember.id;
    const chatBubble = senderMessage ? "Messages thisMember" : "Messages";
    /* console.log(member) */
    return (
      <li key={message.id} className={chatBubble}>
        <span className="avatar">
          <img src={member.clientData.avatar} alt="Avatar" />
        </span>
        <div className="Message-content">
          <div className="username">{member.clientData.username}</div>
          <div className="text">{data}</div>
        </div>
      </li>
    );
  }

  return (
    <ul className="MessagesList">
      {Array.isArray(messages) && messages.map((m) => renderMessage(m, thisMember))}
    </ul>
    
  );
}

export default Messages;
