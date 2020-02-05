import React from 'react'

interface MessageProps {
   username: string
   text: string
}

const Message: React.FC<MessageProps> = ({ username, text }) => (
   <div className="message">
      <div className="message-username">{username}</div>
      <div className="message-text">{text}</div>
   </div>
)

export default Message
