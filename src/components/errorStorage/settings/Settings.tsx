import Modal from 'components/shared/modal/Modal';
import { useSettingsActions } from 'context/settingsContext';

const Settings = () => {
    const { resetSettings } = useSettingsActions();

    return (
        <Modal
            show
            message='Do prawidłowego działa aplikacji musisz przywrócić domyślne ustawienia.'
            title='Błąd odczytania ustawień'
            onConfirm={resetSettings}
            contentConfirm='przywróć'
        ></Modal>
    )
}

export default Settings;
