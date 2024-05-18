import { create } from "zustand";
import axiosClient from "../../plugins/axiosClient";

export const useCategoryStore = create((set) => ({
  getCategory: async () => {
    try {
      let payload = {
        limit: 12,
        owner_id: localStorage.getItem("owner_id"),
        page: 1,
      };
      const response = axiosClient.post(`/category/getall`, payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
}));
