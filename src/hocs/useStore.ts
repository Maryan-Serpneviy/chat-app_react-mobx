import { observer, inject } from 'mobx-react'

export default function(Component, store = 'store') {
    return inject(store)(observer(Component))
}
