import {create} from "zustand"
import axiosClient from "../../plugins/axiosClient"

export const useProductStore = create((set) => ({ 
    products: [],
    getProducts: async()=> {
        try {
          const response = axiosClient.get(`/products/get/1/12`)
          set({products: response?.data})
          return response
        } catch (error) {
            console.log(error);
        }
    },
    addProducts: async(payload)=> {
        try {
          const response = axiosClient.post(`/product/create`, payload)
          return response
        } catch (error) {
            console.log(error);
        }
    },
 }))