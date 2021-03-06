import { createPortal } from 'react-dom';
import { Transition } from 'react-spring';
import useOnClickEsc from 'hooks/useOnClickEsc';
import Button from 'components/shared/button/Button';
import * as S from './Modal.styles';

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
    useOnClickEsc(onCancel);
    
        return (
        <Transition
            items={show}
        >
            {(styles, item) => (
                item && (
                    <S.ModalContainer>
                        <S.Modal style={styles}>
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
