import { useState, createContext, useContext, useEffect } from 'react';
import { getSettingsStorage, setSettingsStorage } from 'storage/settingsStorage';
import { ErrorStorage, ResetErrorAction, Settings } from 'types';
import {
    SettingsProps,
    SettingsState,
    SettingsActions,
    UpdateSettingAction,
    ResetSettingsAction,
} from './settingsContext.types';

const SettingsContextState = createContext<SettingsState>(null!);
const SettingsContextActions = createContext<SettingsActions>(null!);

const initSettings: Settings = {
    lightMode: false,
    defaultPriority: false,
    displayCreateAtNote: false
}

export const SettingsProvider = ({ children }: SettingsProps) => {
    const [error, setError] = useState<ErrorStorage>(null!);
    const [settings, setSettings] = useState<Settings>(null!);

    useEffect(() => {
        try {
            const settingStorage = getSettingsStorage();
            setSettings(settingStorage ? settingStorage : initSettings);
            setError(null);
        } catch (error) {
            setError((error as Error).message);
        }
    }, []);

    useEffect(() => {
        if (settings !== null) {
            setSettingsStorage(settings);
        }
    }, [settings]);

    const updateSetting: UpdateSettingAction = (key) => {
        setSettings((state) => {
            if (key in state) {
                return { ...state, [key]: !state[key] }
            }

            return state;
        })
    }

    const resetSettings: ResetSettingsAction = () => {
        setSettings(initSettings);
    }

    const resetError: ResetErrorAction = () => setError(null);

    return (
        <SettingsContextState.Provider value={{ error, settings }}>
            <SettingsContextActions.Provider value={{
                updateSetting,
                resetError,
                resetSettings
            }}>
                { children }
            </SettingsContextActions.Provider>
        </SettingsContextState.Provider>
    )
}

export const useSettingsState = () => useContext(SettingsContextState);
export const useSettingsActions = () => useContext(SettingsContextActions);
