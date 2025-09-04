import React from 'react';
import '../../assets/styles/cancel.css';

export default function Cancel({ onConfirm }) {
    return (
        <div>
            <h2 className="cancel-text">
                예약을 취소하시겠습니까? <br />
                취소하신 예약은 철회가 불가능합니다.
            </h2>
            <div>
                <button className="modal-cancelBtn" onClick={onConfirm}>
                    취소하기
                </button>
            </div>
        </div>
    );
}
