import { KeyboardEventHandler, useRef } from 'react';

const isHidden = (element: any) => {
    const styles = window.getComputedStyle(element);
    return styles.display === 'none' || styles.visibility === 'collapse' || element.getAttribute('aria-hidden');
}

const hasSize = (element: any) => {
    return element.clientWidth > 0 && element.clientHeight > 0;
}

const isDisabled = (element: any) => {
    return element.hasAttribute('disabled');
}

function getFocusableElements(node: any): any[] {
    return [...node.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')]
        .filter(el => !isDisabled(el) && hasSize(el) && !isHidden(el)) as any[];
}

const getActiveElement = () => {
    return document.activeElement;
}

const focusMenager = (event: any, node: any) => {
    const elements = getFocusableElements(node);
    
    if (elements.length === 0) {
        event.preventDefault();
        return;
    }
    
    const firstElement = elements[0];
    const lastElement = elements[elements.length - 1];
    const activeElement = getActiveElement();
    
    let nextFocusElement;

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

    const currentElement = elements.includes(activeElement);

    if (!currentElement) {
        event.preventDefault();

        nextFocusElement = event.shiftKey ? lastElement : firstElement;
        nextFocusElement.focus();
    }
}

export const useFocus = (show: boolean, onClose: any) => {
    const wrapper = useRef<any>(null!);
    const previousActiveElement = useRef<any>(null!);

    const setContentElement = (show: boolean, node: any) => {
        wrapper.current = node;

        if (show && node) {
            previousActiveElement.current = document.activeElement as HTMLElement;
            node.focus();
        } else {
            previousActiveElement.current?.focus();
        }
    }

    const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
        if (!show) {
            return;
        }

        if (event.key === 'Escape') {
            event.stopPropagation();
            onClose();
        }

        if (event.key === 'Tab') {
            focusMenager(event, wrapper.current);
        }
    }

    const onRender = (node: any) => {
        setContentElement(show, node);
    }

    return {
        tabIndex: -1,
        onKeyDown: handleKeyDown,
        ref: onRender
    }
}
