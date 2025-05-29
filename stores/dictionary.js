import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi' 
export const useDictionaryStore = defineStore('dictionary', {
    state: () => ({ 
        regions:[], 
        categories:[], 
    }),
    actions: { 
        get_regions(lang){ 
            let locale = lang?lang:'la'
            return new Promise ((resolve, reject)=>{
                useApi(`/api/v1/regions?lang=${locale}`)
                .then((res)=>{
                    this.regions=res.data
                    return resolve(res)
                })
                .catch(()=>{
                    return reject(0)
                })
            })
        }, 
        get_categories(lang){
            let locale = lang?lang:'la'
            return new Promise ((resolve, reject)=>{
                useApi(`/api/v1/plan/categories?lang=${locale}`)
                .then((res)=>{
                    this.categories=res.data
                    return resolve(res)
                })
                .catch(()=>{
                    return reject(0)
                })
            })
        },     
    },
    getters:{
        regionList:(state)=>{
            return state.regions
        },
        categoryList:(state)=>{
            return state.categories
        }
    },
    persist: {
        storage:persistedState.localStorage
    }
})