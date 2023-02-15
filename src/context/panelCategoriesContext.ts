import { create } from 'zustand';

export const usePanelCategories = create(() => false);

export const openPanelCategories = () => usePanelCategories.setState(true);
export const closePanelCategories = () => usePanelCategories.setState(false);
