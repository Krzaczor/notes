import { createPortal } from 'react-dom';
import { Transition } from 'react-spring';
import Button from 'components/shared/button/Button';
import * as S from './Modal.styles';
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
                    <S.ModalContainer>
                        <S.Modal
                            style={styles}
                            {...focus}
                        >
                            { title && <S.Header>{ title }</S.Header> }
                            <S.Body>{ message }</S.Body>
                            <S.Actions>
                                {contentCancel && <Button fluid size='lg' variant='primary' onClick={onCancel}>{contentCancel}</Button>}
                                <Button fluid={!!contentCancel} size='lg' variant='outline-danger' onClick={onConfirm}>{contentConfirm}</Button>
                            </S.Actions>
                        </S.Modal>
                        <S.Overlay style={styles} onClick={onCancel} />
                    </S.ModalContainer>
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
