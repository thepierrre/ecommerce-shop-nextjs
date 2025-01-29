import { create } from "zustand";

type State = {
  isCartPreviewVisible: boolean;
};

type Action = {
  showCartPreview: () => void;
  hideCartPreview: () => void;
};

export const useStore = create<State & Action>((set) => ({
  isCartPreviewVisible: false,
  showCartPreview: () => set(() => ({ isCartPreviewVisible: true })),
  hideCartPreview: () => set(() => ({ isCartPreviewVisible: false })),
}));
