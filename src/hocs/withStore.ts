import { observer, inject } from 'mobx-react'

export function withStore(Component, store: string = 'store') {
    return inject(store)(observer(Component))
}
