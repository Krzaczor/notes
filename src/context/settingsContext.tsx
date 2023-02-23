import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Settings } from 'types';
import {
    SettingsState,
    UpdateSettingAction,
    ResetSettingsAction,
} from './settingsContext.types';

const initSettings: Settings = {
    lightMode: false,
    defaultPriority: false,
    displayCreateAtNote: false
}

export const useSettingsState = create(
    persist<SettingsState>(
        () => ({
            settings: initSettings,
            namesSetings: Object.entries(initSettings).map(setting => setting[0]) as SettingsState['namesSetings'],
        }),
        {
            name: 'notes/settings'
        }
    )
)

const updateSetting: UpdateSettingAction = (key) => {
    useSettingsState.setState((state) => {
        if (key in state.settings) {
            return {
                settings: {
                    ...state.settings,
                    [key]: !state.settings[key]
                } 
            }
        }

        return state;
    })
}

const resetSettings: ResetSettingsAction = () => {
    useSettingsState.setState({
        settings: initSettings
    });
}

export const useSettingsActions = () => ({
    updateSetting,
    resetSettings,
})
