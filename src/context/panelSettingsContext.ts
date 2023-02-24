import { create } from 'zustand';

export const usePanelCategories = create(() => false);

export const showPanelSettings = () => usePanelCategories.setState(true);
export const hidePanelSettings = () => usePanelCategories.setState(false);
