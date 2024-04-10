import { theme } from "antd";
import { create } from "zustand";

interface ThemeState {
  theme: boolean;
  setTheme: () => void;
}

export const useThemeStore = create<ThemeState>()((set) => ({
  theme: false,
  setTheme: () => set((state) => ({ theme: !state.theme })),
}));
