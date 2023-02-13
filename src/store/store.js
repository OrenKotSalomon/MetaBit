import { createStore } from "vuex"
import { contactStore } from './contactStore.js'

export const myStore = createStore({
    strict: true,
    state() {
        return {
        }
    },
    getters: {
        // Reusable accessing logic

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        contactStore,
        // productStore
    }
})

// myStore.subscribe((cmd, state) => {
//     console.log('**** Store state changed: ****')
//     console.log('Command:', cmd.payload)
//     console.log('storeState:\n', state)
//     console.log('*******************************')
// })
