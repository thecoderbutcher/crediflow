import { create } from 'zustand';

interface InstallmentState {
  activeStatuses: number[]; // ej: [1, 2] para pendiente y pagado
  toggleStatus: (status: number) => void;
}

export const useInstallmentStore = create<InstallmentState>((set, get) => ({
  activeStatuses: [1, 2, 3],
  toggleStatus: (status: number) => {
    const current = get().activeStatuses;
    const isActive = current.includes(status);

    const updated = isActive
      ? current.filter((s) => s !== status)
      : [...current, status];

    set({ activeStatuses: updated.length === 0 ? [1, 2, 3] : updated });
  },
}));
