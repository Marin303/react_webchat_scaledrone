import React, { useState, useEffect } from "react";
import Messages from "./Messages";
import Input from "./Input";
import randomAvatar from "./RandomAvatar";
import { Message, Member, Chat, ChatContainerProps } from '../types';


const ChatContainer: React.FC<ChatContainerProps> = ({ username }) => {
  const [chat, setChat] = useState<Chat>({ member: { username: '', avatar: randomAvatar() }, messages: [] });
  const [drone, setDrone] = useState<any>(null);

  useEffect(() => {
    if (username !== '') {
      const drone = new window.Scaledrone(process.env.REACT_APP_CHANNEL_ID, {
        data: chat.member,
      });
      setDrone(drone);
    }
  }, [username]);

  const chatWindow = chat?.messages?.length;

  useEffect(() => {
    if (chatWindow) {
      const scrollElement = document.getElementsByClassName("MessagesList")[0];
      scrollElement.scrollTop = scrollElement.scrollHeight - scrollElement.clientHeight;
    }
  }, [chatWindow]);

  if (drone) {
    drone.on("open", (error: Error) => {
      if (error) {
        return console.error(error);
      }
      const newChatMember = { ...chat.member, id: drone.clientId };
      setChat(prevChat => ({ ...prevChat, member: newChatMember }));

      const room = drone.subscribe("observable-room");

      room.on("message", (message: any) => {
        const { data, member, id } = message;
        const newChatMessages = [...chat.messages, { member, data, id }];
        setChat(prevChat => ({ ...prevChat, messages: newChatMessages }));
      });
    });
  }

  const onSendMessage = (message: string) => {
    if (message.trim() !== "") {
      drone.publish({
        room: "observable-room",
        message,
      });
    }
  };

  return (
    <>
      <h1>ReactWebChat</h1>
      <div className="Chat-container">
        <Messages messages={chat.messages} thisMember={chat.member} />
        <Input onSendMessage={onSendMessage} />
      </div>
    </>
  );
}

export default ChatContainer;
