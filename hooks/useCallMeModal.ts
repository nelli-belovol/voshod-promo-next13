import { create } from 'zustand';

interface CallMeModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useCallMeModal = create<CallMeModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));


export default useCallMeModal;
