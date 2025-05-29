import { defineStore } from 'pinia' 
export const useAdverStore = defineStore('adver', {
    state: () => ({  
        obAdver:true 
    }),
    actions: {  
        setObAdver(val){
            this.obAdver=val
        }   
    }, 
    persist: {
        storage:persistedState.sessionStorage
    }
})