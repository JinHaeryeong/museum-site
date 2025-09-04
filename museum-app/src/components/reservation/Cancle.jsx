import React from 'react';
import '../../assets/styles/cancle.css';

export default function Cancle() {
    return (
        <div>
            예약을 취소하시겠습니까? 취소하신 예약은 철회가 불가능합니다.
            <div>
                <button className="cancleModal">취소하기</button>
            </div>
        </div>
    );
}
