import React from "react";
import "../../assets/styles/museumInfo.css";
export default function MuseumInfo() {
    return (
        <div>
            <div className='museum-info-container'>
                <div className='display-visual'>
                    <img src='/images/museumInfo.jpg' alt='' />
                    <div className='visual-overlay' />
                    <div className='visual-content'>
                        <div className='visual-left'>
                            <p className='visual-title'>오늘 관람 시간</p>
                            <p className='visual-title'>10:00 - 18:00</p>
                            <p className='visual-title'>* 입장 마감은 폐관 30분 전까지</p>
                            <p className='visual-title'>옥외 전시장(정원) 오전 7시부터 오후 9시까지</p>
                        </div>

                        <div className='visual-right'>
                            <p className='visual title'>관람료</p>
                            <p className='visual-free'>무료</p>
                            <p className='visual-sub'>유료 기획 전시 제외</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='museum-info-container'>
                <div className='info'>
                    <ul className='display-content'>
                        <li className='display-li'>
                            <h3>관람시간</h3>
                        </li>
                        <li>
                            <div className='info-detail'>
                                <p className='str-display'>월, 화, 목, 금, 일요일</p>
                                <span>10:00 ~ 18:00 (입장 마감: 17:30)</span>
                                <p className='str-display'>수, 토요일</p>
                                <span>
                                    10:00 ~ 21:00 (입장 마감: 20:30)
                                    <br />* 옥외 전시장(정원)은 오전 7시부터 오후 10시까지 관람하실 수 있습니다.
                                </span>
                            </div>
                        </li>
                    </ul>
                    <ul className='display-content'>
                        <li className='display-li'>
                            <h3>휴관일 및 휴실일</h3>
                        </li>
                        <li>
                            <div className='info-detail'>
                                <p className='str-display'>휴관일</p>
                                <span>
                                    1월1일, 설날(1.29.), 추석(10.6.) <br />
                                </span>
                                <p className='str-display'>상설전시관 정기휴실일</p>
                                <span>
                                    매년 4월, 11월(첫째 월요일) <br /> 상설전시관 내 특별전시실 2 휴실
                                    <br /> 특별전시실 1(특별전시 미운영시 휴실), 야외전시장은 정상 개관 <br />
                                </span>
                                <p className='str-display'>2025년 휴실일</p>
                                <span>4.7.(월), 11.3.(월) 10:00 ~ 18:00 (입장 마감: 17:30)</span>
                            </div>
                        </li>
                    </ul>
                    <ul className='display-content'>
                        <li className='display-li'>
                            <h3>관람료</h3>
                        </li>
                        <li>
                            <div className='info-detail' style={{ transform: "translate(0px, 20px)" }}>
                                <span className='free'>무료</span>
                                <span>상설전시관, 어린이박물관, 무료 특별전시 해당</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='info-notice'>
                    <h4>박물관 관람 시 유의사항</h4>
                    <ul className='display-side'>
                        <li>
                            <span>마스크는 방역지침에 따라 자율적으로 착용하시기 바랍니다.</span>
                        </li>
                        <li>
                            <span>박물관의 모든 공간은 금연구역입니다.</span>
                        </li>
                        <li>
                            <span>음식물 반입과 안내견 이외의 애완동물(또는 반려동물)의 출입은 금지되어 있습니다.</span>
                        </li>
                        <li>
                            <span>전시실 입장 전에, 휴대전화는 전원을 꺼주시거나 진동으로 전환하여 주십시오.</span>
                        </li>
                        <li>
                            <span>
                                전시품 보호 및 안전사고 예방을 위하여 배낭 및 책가방(백팩)은 1층 물품보관함에 넣어
                                주십시오.
                            </span>
                        </li>
                        <li>
                            <span>박물관내에서는 바퀴달린 신발을 신은 고객은 입장이 불가합니다.</span>
                        </li>
                        <li>
                            <span>전시물에 손을 대거나 손상을 입힐 수 있는 행위는 절대 삼가 주십시오.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
