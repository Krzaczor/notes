import { useState, createContext, useContext, useEffect } from 'react';
import { getSettingsStorage, setSettingsStorage } from 'storage/settingsStorage';
import { ErrorStorage, ResetErrorAction, Settings } from 'types';
import {
    SettingsProps,
    SettingsState,
    SettingsActions,
    UpdateSettingAction,
} from './settingsContext.types';

const SettingsContextState = createContext<SettingsState>(null!);
const SettingsContextActions = createContext<SettingsActions>(null!);

const initSettings: Settings = {
    lightMode: false,
    defaultPriority: false,
    displayCreateAtNote: false
}

export const SettingsProvider = ({ children }: SettingsProps) => {
    const [error, setError] = useState<ErrorStorage>(null);
    const [settings, setSettings] = useState<Settings>(() => {
        try {
            const settingStorage = getSettingsStorage();
            return settingStorage ? settingStorage : initSettings;
        } catch (error) {
            setError((error as Error).message);
            return initSettings;
        }
    });

    useEffect(() => {
        setSettingsStorage(settings);
    }, [settings]);

    const updateSetting: UpdateSettingAction = (key) => {
        setSettings((state) => {
            if (key in state) {
                return { ...state, [key]: !state[key] }
            }

            return state;
        })
    }

    const resetError: ResetErrorAction = () => setError(null);

    return (
        <SettingsContextState.Provider value={{ error, settings }}>
            <SettingsContextActions.Provider value={{ updateSetting, resetError }}>
                { children }
            </SettingsContextActions.Provider>
        </SettingsContextState.Provider>
    )
}

export const useSettingsState = () => useContext(SettingsContextState);
export const useSettingsActions = () => useContext(SettingsContextActions);
