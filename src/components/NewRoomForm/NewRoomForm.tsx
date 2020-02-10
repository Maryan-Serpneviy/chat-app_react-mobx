import React, { useRef } from 'react'
import { withStore } from '~hoc/withStore'

const NewRoomForm = props => {
   const store = props.store.main
   const input = useRef(null)
   
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      store.handleNewRoom(event.target.value)
   }

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      store.createRoom()
      input.current.value = ''
   }

   return (
      <div className="new-room-form">
         <form onSubmit={handleSubmit}>
            <input
               ref={input}
               value={store.newRoom}
               onChange={handleChange}
               placeholder="Create room..."
               type="text"
            />
            <button id="create-room-btn" type="submit">+</button>
         </form>
      </div>
   )
}

export default withStore(NewRoomForm)
