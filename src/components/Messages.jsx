import React from "react";

function Messages({ messages, thisMember }) {
  function renderMessage(message, thisMember) {
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
      {messages.map((m) => renderMessage(m, thisMember))}
    </ul>
  );
}

export default Messages;
