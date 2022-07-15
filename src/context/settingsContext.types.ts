import { ReactNode } from 'react';
import {
    ErrorStorage,
    ResetErrorAction,
    Settings,
} from 'types';

export type UpdateSettingAction = (key: keyof Settings) => void;
export type ResetSettingsAction = () => void;

export interface SettingsState {
    settings: Settings;
    error: ErrorStorage;
}

export interface SettingsActions {
    updateSetting: UpdateSettingAction;
    resetSettings: ResetSettingsAction;
    resetError: ResetErrorAction;
}

export interface SettingsProps {
    children: ReactNode;
}
