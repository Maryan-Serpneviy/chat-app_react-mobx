import React from 'react'
import { withStore } from '~hoc/withStore'

interface FormProps {
   store: object
}

interface Store {
   newMessageText: string
   handleInput: (text: string) => void
}

const SendMessageForm: React.FC<FormProps> = (props) => {
   const store: Store = props.store

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      store.handleInput(event.target.value)
   }

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      console.log(store.newMessageText)
   }

   return (
      <form onSubmit={handleSubmit} className="send-message-form">
         <input
            value={store.newMessageText}
            onChange={handleChange}
            placeholder="Write a message..."
            type="text"
         />
      </form>
   )
}

export default withStore(SendMessageForm)
