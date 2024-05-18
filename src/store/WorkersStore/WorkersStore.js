import {create} from "zustand"
import axiosClient from "../../plugins/axiosClient"

export const useWorkerStore = create((set) => ({ 
    workers: [],
    getWorkers: async()=> {
        try {
          const response = axiosClient.get(`/workers/get/1/12`)
          set({workers: response?.data?.all_workers})
          return response
        } catch (error) {
            console.log(error);
        }
    },
    postWorker: async(payload)=> {
        try {
          const response = axiosClient.post(`/worker/create`, payload)
          return response
        } catch (error) {
            console.log(error);
        }
    },
    
 }))