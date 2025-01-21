import modalHTML from "./render-modal.html?raw";
let modal;

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const renderModal = (element) => {
    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHTML;
    modal.className = 'modal-container hide-modal';

    element.append(modal);
}