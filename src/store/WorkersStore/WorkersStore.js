import {create} from "zustand"
import axiosClient from "../../plugins/axiosClient"

export const useWorkersStore = create((set) => ({ 
    workers: [],
    getWorkers: async()=> {
        try {
          const response = axiosClient.get(`/products/get/1/12`)
          set({workers: response?.data})
          return response
        } catch (error) {
            console.log(error);
        }
    },
    
 }))