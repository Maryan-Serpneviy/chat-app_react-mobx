import React, { Component } from 'react'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import { withStore } from '~hoc/withStore'
import RoomList from '~cm/RoomsList'
import MessageList from '~cm/MessageList'
import SendMessageForm from '~cm/SendMessageForm'
import NewRoomForm from '~cm/NewRoomForm'
import { instanceLocator, tokenUrl } from '~/config'

const ROOM = {
   Work: '61954415-3a85-4a1f-aa3c-96b1b5cae531'
}

@withStore
export default class Main extends Component {
   private store = this.props.store

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
      const chatManager = new ChatManager({
         instanceLocator,
         userId: 'marian',
         tokenProvider: new TokenProvider({
            url: tokenUrl
         }),
         connectionTimeout: 5000
      })

      chatManager.connect()
      .then((currentUser: object) => {
         currentUser.subscribeToRoomMultipart({
            roomId: ROOM.Work,
            hooks: {
               onMessage: (message: object) => {
                  this.store.pushMessage(message)
               }
            },
            messageLimit: 20
         })
      })
      .catch((error: object): void => console.error(error))
   }
}
