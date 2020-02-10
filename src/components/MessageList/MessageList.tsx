import React, { useEffect } from 'react'
import Message from '~cm/Message'

interface ListProps {
   messages: object[]
}

const MessageList: React.FC<ListProps> = ({ messages }) => {
   useEffect(() => {
      window.scrollTo({
         top: document.body.scrollHeight,
         behavior: 'smooth'
      })
   }, [messages])

   return (
      <div className="message-list">
         {messages.map((message: object, index: number) => (
            <Message
               key={index}
               username={message.senderId}
               text={message.parts[0].payload.content}
            />
         ))}
      </div>
   )
}

export default MessageList
