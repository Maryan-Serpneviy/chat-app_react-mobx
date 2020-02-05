import { observable, computed, action } from 'mobx'

export default class Store {
   constructor(rootStore) {
      this.rootStore = rootStore
      this.chatManager = this.rootStore.chatManager
      this.room = this.rootStore.room
   }

   @observable messages: object[] = []
   @observable newMessageText: string = ''

   @action connectUser(): void {
      this.chatManager.connect()
      .then((currentUser) => {
         this.currentUser = currentUser
         this.currentUser.subscribeToRoomMultipart({
            roomId: this.room.work,
            hooks: {
               onMessage: (message) => {
                  this.pushMessage(message)
               }
            },
            messageLimit: 20
         })
      })
      .catch((error) => console.error(error))
   }

   @action pushMessage(newMessage: object): void {
      this.messages = [...this.messages, newMessage]
   }

   @action handleInput(text: string): void {
      this.newMessageText = text
   }

   @action sendMessage(roomId = this.room.work): void {
      this.currentUser.sendMessage({
         text: this.newMessageText,
         roomId
      })
   }
}
