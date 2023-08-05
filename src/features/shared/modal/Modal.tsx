import { createPortal } from 'react-dom';
import { Transition } from 'react-spring';
import Button from 'features/shared/button/Button';
import s from './Modal.module.scss';
import { useFocus } from 'hooks/useFocus';

interface Props {
    show: boolean;
    message: string;
    title?: string;
    contentCancel?: string;
    contentConfirm: string;
    onCancel?: () => void;
    onConfirm: () => void;
}

const ModalPortal = ({
    show,
    title,
    message,
    contentCancel,
    contentConfirm,
    onCancel = () => {},
    onConfirm
}: Props) => {
    const focus = useFocus(show, onCancel);
    
    return (
        <Transition
            items={show}
        >
            {(styles, item) => (
                item && (
                    <div className={s.modalContainer}>
                        <div className={s.root}
                            style={styles}
                            {...focus}
                        >
                            { title && <p className={s.modalHeader}>{ title }</p> }
                            <p className={s.modalBody}>{ message }</p>
                            <div className={s.modalActions}>
                                {contentCancel && <Button fluid size='lg' variant='primary' onClick={onCancel}>{contentCancel}</Button>}
                                <Button fluid={!!contentCancel} size='lg' variant='outline-danger' onClick={onConfirm}>{contentConfirm}</Button>
                            </div>
                        </div>
                        <div className={s.overlay} style={styles} onClick={onCancel} />
                    </div>
                )
            )}
        </Transition>
    )
}

const Modal = (props: Props) => {
    let modal = document.querySelector('.my-modal');

    if (modal === null) {
        modal = document.createElement('div');
        modal.classList.add('my-modal');
        document.body.appendChild(modal);
    }

    return createPortal(
        <ModalPortal {...props} />,
        modal
    )
}

export default Modal;
