import { observable, computed, action } from 'mobx'

class Store {
   @observable messages: object[] = []
   @observable newMessageText: string = ''

   @action pushMessage(newMessage: object): void {
      const message = newMessage
      this.messages = [...this.messages, message]
   }

   @action handleInput(text: string): void {
      this.newMessageText = text
   }
}

export default new Store()
