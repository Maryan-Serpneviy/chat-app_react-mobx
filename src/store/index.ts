import { configure } from 'mobx'
import Store from './store'

configure({ enforceActions: 'observed' })
class RootStore {
    constructor() {
        this.store = new Store(this)
    }

}

export default new RootStore()
