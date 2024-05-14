import {create} from "zustand"
import axiosClient from "../../plugins/axiosClient"

export const useProductStore = create((set) => ({ 
    products: [],
    fileUpload: async(formData)=> {
        try {
          const response = axiosClient.post(`/file-upload`, formData)
          return response
        } catch (error) {
            console.log(error);
        }
    },
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
    updateProduct: async(payload)=> {
        try {
          const response = axiosClient.put(`/product/update`, payload)
          return response
        } catch (error) {
            console.log(error);
        }
    },
    deleteProduct: async(id)=> {
        try {
          const response = axiosClient.delete(`/product/delete/${id}`)
          return response
        } catch (error) {
            console.log(error);
        }
    },
 }))