interface Message {
    data: string,
    member: Member,
    id: string
  }
  
  interface Member {
    username: string,
    avatar: string,
    id?: string
  }
  
  interface Chat {
    member: Member,
    messages: Message[]
  }
  
  interface ChatContainerProps {
    username: string
  }
  
  declare global {
    interface Window {
      Scaledrone: any;
    }
  }
  
  export type { Message, Member, Chat, ChatContainerProps };
  