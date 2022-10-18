import { defineStore } from 'pinia'

const useStoreContact = defineStore('main', {
    state: () => ({ 
        contact: []
    }),
    getters: {
      getContact: ({ list }) => list.map((obj) => `${obj.name} - ${obj.pesan}`)
    },
    actions: {
      addContact (data) {
        return this.contact.push(data)
      }
    },
})

export default useStoreContact;