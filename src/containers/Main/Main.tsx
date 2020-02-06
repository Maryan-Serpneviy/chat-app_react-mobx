import React, { useEffect, useMemo } from 'react'
import { withStore } from '~hoc/withStore'
import RoomList from '~cm/RoomsList'
import MessageList from '~cm/MessageList'
import SendMessageForm from '~cm/SendMessageForm'
import NewRoomForm from '~cm/NewRoomForm'

const Main: React.FC = props => {
   const store = props.store.store
   const { messages, joinableRooms } = store

   useEffect(() => {
      store.connectUser()
   }, [])

   return useMemo(
      () => (
         <div className="app">
            <RoomList rooms={joinableRooms} />
            <MessageList messages={messages} />
            <SendMessageForm />
            <NewRoomForm />
         </div>
      ),
      [joinableRooms]
   )
}

export default withStore(Main)
