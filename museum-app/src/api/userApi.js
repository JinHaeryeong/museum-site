// userApi.js
import axiosInstance from "./axiosInstance";
export const apiSignIn = async (signUser) => {
    const response = await axiosInstance.post(`/auth/signin`, signUser); // `/api/auth/login`
    return response.data;
};
export const apiSignOut = async ({ email }) => {
    const response = await axiosInstance.post(`/auth/signout`, { email });
    return response.data;
};
