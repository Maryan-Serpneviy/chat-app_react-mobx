import { chatManager } from '~/chatkitConfig'
import MainStore from './main'

class RootStore {
    constructor() {
        this.chatManager = chatManager
        this.main = new MainStore(this)
    }

}

export default new RootStore()
