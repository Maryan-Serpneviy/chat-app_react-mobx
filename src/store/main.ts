import { observable, action } from 'mobx'

export default class Store {
   constructor(rootStore) {
      this.rootStore = rootStore
      this.chatManager = this.rootStore.chatManager
   }

   @observable messages: object[] = []
   @observable newMessageText: string = ''
   @observable joinableRooms: []
   currentRoomId: string = ''

   @action connectUser(): void {
      this.chatManager.connect()
         .then((currentUser) => {
            this.currentUser = currentUser
            this.getRooms()
         })
         .catch((error) => console.error(error))
   }

   @action getRooms(): void {
      this.currentUser.getJoinableRooms()
         .then(() => {
            this.joinableRooms = this.currentUser.rooms
         })
         .catch(error => {
            console.error(`Error getting joinable rooms \n ${error}`)
         })
   }

   @action joinRoom(roomId: string): void {
      this.currentRoomId = roomId
      this.clearMessages()
      this.currentUser.subscribeToRoomMultipart({
         roomId,
         hooks: {
            onMessage: (message) => {
               this.pushMessage(message)
            }
         },
         messageLimit: 20
      })
   }

   @action clearMessages() {
      this.messages = []
   }

   @action pushMessage(newMessage: object): void {
      this.messages = [...this.messages, newMessage]
   }

   @action handleInput(text: string): void {
      this.newMessageText = text
   }

   @action sendMessage(): void {
      this.currentUser.sendMessage({
         roomId: this.currentRoomId,
         text: this.newMessageText
      })
   }
}
