import {create} from "zustand"
import axiosClient from "../../plugins/axiosClient"
import axios from "axios"
const baseURL = "http://18.158.24.26:8080/v1"
export const useAuthStore = create((set) => ({ 
    RegisterOwner: async(payload)=> {
        try {
          const response = axios.post(`${baseURL}/register`, payload)
          return response
        } catch (error) {
            console.log(error);
        }
    },
    VerifyOwner: async(email, code)=> {
        try {
          const response = axios.get(`${baseURL}/verification?email=${email}&code=${code}`)
          return response
        } catch (error) {
            console.log(error);
            return error
        }
    },
    LoginOwner: async(payload)=> {
        try {
          const response = axios.get(`${baseURL}/login?email=${payload?.email}&password=${payload?.password}`)
          return response
        } catch (error) {
            console.log(error);
            return error
        }
    },
 }))