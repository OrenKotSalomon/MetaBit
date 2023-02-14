import { contactService } from "../services/contactService";

export const contactStore = {
    state: {
        contacts: [],

    },
    getters: {
        contacts({ contacts }) { return contacts }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(p => p._id === contactId)
            state.lastRemovedProduct = state.contacts[idx]
            state.contacts.splice(idx, 1)
        },
        addContact(state, { contact }) {
            // console.log('contact', contact);
            // state.contacts.unshift(contact)
        },
        saveContact(state, { contact }) {
            console.log('contact', contact);

            const idx = state.contacts.findIndex(p => p._id === contact._id)
            state.contacts.splice(idx, 1, contact)
        }
    },
    actions: {
        async loadContacts({ commit }, { filterBy }) {
            try {
                const contacts = await contactService.getContacts(filterBy)
                commit({ type: 'setContacts', contacts })
            } catch (error) {
                console.log(error, 'cant load contacts');
            }

        },
        async removeContact({ commit }, payload) {
            try {
                await contactService.deleteContact(payload.contactId)
                commit({ type: 'removeContact' })
            } catch (error) {
                console.log(error, 'cant REMOVE contacts');

            }
        },
        async saveContact({ commit }, payload) {
            console.log('payload', payload);

            const actionType = !payload.contact._id ? "addContact" : "saveContact";
            try {
                const newContact = await contactService.saveContact(payload.contact)
                commit({ type: actionType, contact: newContact })
            } catch (error) {
                console.log(error, 'cant SAVE contacts');

            }
        }
    }
}