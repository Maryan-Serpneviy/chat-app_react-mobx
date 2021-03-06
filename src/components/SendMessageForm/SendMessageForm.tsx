import React, { useRef } from 'react'
import { withStore } from '~hoc/withStore'

const SendMessageForm: React.FC<Props> = props => {
   const store: Store = props.store.main
   const messageInput = useRef(null)

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      store.handleInput(event.target.value)
   }

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      store.sendMessage()
      messageInput.current.value = ''
      messageInput.current.focus()
   }

   return (
      <form onSubmit={handleSubmit} className="send-message-form">
         <input
            ref={messageInput}
            value={store.newMessageText}
            onChange={handleChange}
            placeholder="Write a message..."
            type="text"
         />
      </form>
   )
}

interface Props {
   store: object
}

interface Store {
   newMessageText: string
   handleInput: (text: string) => void
   sendMessage: () => void
}

export default withStore(SendMessageForm)
