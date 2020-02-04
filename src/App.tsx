import React, { Component } from 'react'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import RoomList from '~cm/RoomsList'
import MessageList from '~cm/MessageList'
import SendMessageForm from '~cm/SendMessageForm'
import NewRoomForm from '~cm/NewRoomForm'
import { instanceLocator, tokenUrl } from './config'
import './App.scss'

export default class App extends Component {
   render() {
      return (
         <div className="app">
            <RoomList />
            <MessageList />
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

      const tokenProvider = new TokenProvider({
         url: tokenUrl,
         queryParams: {
           //someKey: someValue,
         },
         headers: {
           //SomeHeader: 'some-value',
         }
       })

      chatManager.connect()
      .then(currentUser => {
         console.log('Successful connection', currentUser)
         currentUser.subscribeToRoom({
            roomId: '61954415-3a85-4a1f-aa3c-96b1b5cae531',
            messageLimit: 20,
            hooks: {
               onNewMessage: message => {
                  console.log('message.text: ', message)
               }
            }
         })
      })
      .catch(error => console.error(error))
   }
}
