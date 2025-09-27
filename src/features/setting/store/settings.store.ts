import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { settings, type Setting, type Settings } from '../model/settings.model';

const init: Array<Setting> = [
    {
        name: 'lightMode',
        label: 'Jasny motyw',
        value: false,
    },
    {
        name: 'displayCreateAtNote',
        label: 'Wyświetll czas utworzenia',
        value: false,
    }
]

export const useSettingsState = create(
    persist<Settings>(
        () => ({ settings: init }),
        {
            name: 'notes/settings',
            onRehydrateStorage(data) {
                return (state) => ({
                    ...state,
                    settings: settings.parse(data)
                });
            }
        }
    )
)

export const updateSetting = (name: string): void => {
    useSettingsState.setState((state) => {
        const settings = state.settings.map((item) => {
            if (item.name === name) {
                item.value = !item.value;
            }

            return item;
        })

        return {
            ...state,
            settings
        }
    })
}

export const resetSettings = (): void => {
    useSettingsState.setState((state) => {
        return {
            ...state,
            settings: init
        }
    });
}
