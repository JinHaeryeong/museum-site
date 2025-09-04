// reservationApi.js
import axiosAuth from './axiosAuthInstance';

// 예약 목록 조회
export const apiGetReservations = async ({ userId, page = 1, perPage = 5 }) => {
    const { data } = await axiosAuth.get(`/reservations`, {
        params: { userId, page, perPage },
    });
    return data;
};

// 예약
export const apiCreateReservation = async (payload) => {
    const { data } = await axiosAuth.post(`/reservations`, payload);
    return data;
};

// 예약 취소
export const apiCancelReservation = async (id) => {
    const { data } = await axiosAuth.patch(`/reservations/${id}/cancel`);
    return data;
};
