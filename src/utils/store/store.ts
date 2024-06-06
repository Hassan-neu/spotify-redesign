import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface StoreContent {
    isFriendsTabOpen: boolean;
    openFriendsTab: () => void;
    closeFriendsTab: () => void;
}

export const useSpotifyContext = create<StoreContent>()(
    devtools((set) => ({
        isFriendsTabOpen: false,
        openFriendsTab: () =>
            set((prev) => ({
                ...prev,
                isFriendsTabOpen: true,
            })),
        closeFriendsTab: () =>
            set((prev) => ({ ...prev, isFriendsTabOpen: false })),
    }))
);
