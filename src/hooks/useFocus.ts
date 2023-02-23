import { KeyboardEvent, KeyboardEventHandler, useRef } from 'react';

const isHidden = (element: Element) => {
    const styles = window.getComputedStyle(element);
    return styles.display === 'none' || styles.visibility === 'collapse' || element.getAttribute('aria-hidden');
}

const hasSize = (element: Element) => {
    return element.clientWidth > 0 && element.clientHeight > 0;
}

const isDisabled = (element: Element) => {
    return element.hasAttribute('disabled');
}

function getFocusableElements(node: HTMLElement | null) {
    if (node === null) {
        return [];
    }

    return [...node.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')]
        .filter(el => !isDisabled(el) && hasSize(el) && !isHidden(el)) as HTMLElement[];
}

const getActiveElement = () => {
    return document.activeElement;
}

const focusMenager = (event: KeyboardEvent<HTMLElement>, node: HTMLElement | null) => {
    const elements = getFocusableElements(node);
    
    if (elements.length === 0) {
        event.preventDefault();
        return;
    }
    
    const firstElement = elements[0];
    const lastElement = elements[elements.length - 1];
    const activeElement = getActiveElement() as HTMLElement;
    
    let nextFocusElement: HTMLElement | undefined;

    if (!event.shiftKey && lastElement === activeElement) {
        nextFocusElement = firstElement;
    }
    
    if (event.shiftKey && firstElement === activeElement) {
        nextFocusElement = lastElement;
    }
    
    if (nextFocusElement) {
        event.preventDefault();
        nextFocusElement.focus();
        return;
    }

    if (activeElement === null) {
        return;
    }

    const currentElement = elements.includes(activeElement);

    if (!currentElement) {
        event.preventDefault();

        nextFocusElement = event.shiftKey ? lastElement : firstElement;
        nextFocusElement.focus();
    }
}

export const useFocus = (show: boolean, onClose: (event: KeyboardEvent<HTMLElement>) => void) => {
    const wrapper = useRef<HTMLElement | null>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);

    const setContentElement = (show: boolean, node: HTMLElement | null) => {
        if (show && node) {
            wrapper.current = node;
            previousActiveElement.current = document.activeElement as HTMLElement;
            node.focus();
        } else {
            previousActiveElement.current?.focus();
        }
    }

    const handleKeyDown: KeyboardEventHandler<HTMLElement> = (event) => {
        if (!show) {
            return;
        }

        if (event.key === 'Escape') {
            event.stopPropagation();
            onClose(event);
        }

        if (event.key === 'Tab') {
            focusMenager(event, wrapper.current);
        }
    }

    const onRender = (node: HTMLElement | null) => {
        setContentElement(show, node);
    }

    return {
        tabIndex: -1,
        onKeyDown: handleKeyDown,
        ref: onRender
    }
}
