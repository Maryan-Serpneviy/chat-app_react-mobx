import { observable, action } from 'mobx'

export default class Store {
   constructor(rootStore) {
      this.rootStore = rootStore
      this.chatManager = this.rootStore.chatManager
   }

   @observable messages: object[] = []
   @observable joinableRooms: object[] = []
   @observable newMessageText: string = ''
   @observable newRoom: string = ''
   currentRoomId: string = ''

   @action connectUser() {
      this.chatManager.connect()
         .then((currentUser) => {
            this.currentUser = currentUser
            this.getRooms()
         })
         .catch((error) => console.error(error))
   }

   @action getRooms() {
      this.currentUser.getJoinableRooms()
      .then(() => {
         this.joinableRooms = this.currentUser.rooms
      })
      .catch(err => console.error('Error getting joinable rooms ', err))
   }

   @action subscribeToRoom(roomId: string = this.currentRoomId) {
      this.clearMessages()
      this.currentRoomId = roomId
      this.currentUser.subscribeToRoomMultipart({
         roomId,
         hooks: {
            onMessage: (message) => {
               this.pushMessage(message)
            }
         },
         messageLimit: 20
      })
      .catch(err => console.error(err))
   }

   @action clearMessages() {
      this.messages = []
   }

   @action pushMessage(newMessage: object) {
      this.messages = [...this.messages, newMessage]
   }

   @action handleNewRoom(value: string) {
      this.newRoom = value
   }

   @action createRoom() {
      const roomId = `#${this.newRoom}`
      this.currentRoomId = roomId
      this.currentUser.createRoom({
         name: this.newRoom,
         id: roomId,
         private: false
         // addUserIds: ['one', 'two']
      })
      .then(room => {
         this.currentUser.joinRoom({
            roomId: room.id
         })
         return room
      })
      .then(room => {
         this.subscribeToRoom(room.id)
         return room
      })
      .then(room => this.pushRoom(room))
      .catch(err => console.error(err))
   }

   @action pushRoom(newRoom: object) {
      this.joinableRooms = [...this.joinableRooms, newRoom]
   }

   @action handleInput(text: string) {
      this.newMessageText = text
   }

   @action sendMessage() {
      this.currentUser.sendMessage({
         roomId: this.currentRoomId,
         text: this.newMessageText
      })
   }
}
