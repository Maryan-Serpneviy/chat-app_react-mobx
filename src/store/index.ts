import { configure } from 'mobx'
import { chatManager, room } from '~/chatkitConfig'
import MainStore from './store'

configure({ enforceActions: 'observed' })
class RootStore {
    constructor() {
        this.chatManager = chatManager
        this.room = room
        
        this.store = new MainStore(this)
    }

}

export default new RootStore()
