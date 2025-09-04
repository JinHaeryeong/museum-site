import axiosInstance from "./axiosInstance";
export const apiCalendar = async () => {
    const response = await axiosInstance.get(`/exhibition/calendar`); // `/api/exhibition/calander`

    return response.data;
};
