import React, { Component } from 'react'
import { withStore } from '~hoc/withStore'
import RoomList from '~cm/RoomsList'
import MessageList from '~cm/MessageList'
import SendMessageForm from '~cm/SendMessageForm'
import NewRoomForm from '~cm/NewRoomForm'

@withStore
export default class Main extends Component {
   readonly store = this.props.store.store

   render() {
      const { messages } = this.store

      return (
         <div className="app">
            <RoomList />
            <MessageList messages={messages} />
            <SendMessageForm />
            <NewRoomForm />
         </div>
      )
   }

   componentDidMount() {
      this.store.connectUser()
   }
}
