import React, { useRef } from 'react'
import { withStore } from '~hoc/withStore'

interface FormProps {
   store: object
}

interface Store {
   newMessageText: string
   handleInput: (text: string) => void
}

const SendMessageForm: React.FC<FormProps> = (props) => {
   const store: Store = props.store.store
   const messageInput = useRef(null)

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      store.handleInput(event.target.value)
   }

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
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

export default withStore(SendMessageForm)
