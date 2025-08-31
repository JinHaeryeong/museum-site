import React from "react";

/* 
TS가 아니라 interface를 못씀
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
  }
*/
export default function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div className='modal'>
            <div className='modal-container'>
                <h2 className='modal-title'>{title}</h2>
                <div className='modal-content'>{children}</div>
                <button className='modal-close' onClick={onClose}>
                    닫기
                </button>
            </div>
        </div>
    );
}
