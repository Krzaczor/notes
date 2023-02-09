import { Settings } from 'types';

export type UpdateSettingAction = (key: keyof Settings) => void;
export type ResetSettingsAction = () => void;

export interface SettingsState {
    settings: Settings;
}
