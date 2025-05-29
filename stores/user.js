import { defineStore } from 'pinia' 
export const useUserStore = defineStore('user', {
    state: () => ({ 
        respondVacancy:{}, 
        lang:'la' 
    }),
    actions: { 
        setRespondVacancy(key,  data){ 
            this.respondVacancy[key]=data
        },  
        setLang(lang){
            this.lang=lang
        }   
    }, 
    persist: {
        storage:persistedState.localStorage
    }
})