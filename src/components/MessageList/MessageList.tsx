import React, { useEffect } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import Message from '~cm/Message'

const MessageList: React.FC<Props> = ({ messages }: InferProps<typeof MessageList.propTypes>) => {
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

MessageList.propTypes = {
   messages: PropTypes.array.isRequired
}

interface Props {
   messages: object[]
}

export default MessageList
