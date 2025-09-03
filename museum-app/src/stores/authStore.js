import { devtools, persist } from "zustand/middleware";
import { create } from "zustand";
// authStore.js
export const useAuthStore = create(
    devtools((set) => ({
        authUser: null, //인증받은 사용자 정보
        signInAuthUser: (user) =>
            set({
                authUser: user,
            }),
        signout: () =>
            set({
                authUser: null,
            }),
    }))
);
