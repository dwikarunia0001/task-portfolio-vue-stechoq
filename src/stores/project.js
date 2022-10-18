import { defineStore } from 'pinia'

const useStoreProject = defineStore('main', {
    state: () => ({ 
        project: [
            {
                name: 'Tribute Page',
                img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Indonesia_declaration_of_independence_17_August_1945.jpg',
                website: 'https://codepen.io/dwikarunia0001/full/VwmgKdR'
              },
              {
                name: 'Product Landing Page',
                img: 'https://images.pexels.com/photos/1181449/pexels-photo-1181449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                website: 'https://codepen.io/dwikarunia0001/full/JjbxWaa'
              },
              {
                name: 'Survey Form',
                img: 'https://images.pexels.com/photos/669613/pexels-photo-669613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                website: 'https://codepen.io/dwikarunia0001/full/jOVdVWG'
              }
        ]
    }),
    getters: {
        getProject () {
            return this.project
        }
    },
});

export default useStoreProject;