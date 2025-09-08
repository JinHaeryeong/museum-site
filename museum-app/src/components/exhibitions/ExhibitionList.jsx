import '../../assets/styles/Exhibitions.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { useEffect, useRef, useState } from 'react';

const imgName = 'exhibition';
const exhibitionsImg = [`${imgName}_img1.jpg`, `${imgName}_img2.png`, `${imgName}_img3.jpg`, `${imgName}_img4.jpg`];

const exhibitionsBottom = [
    {
        title: '마나 모아나-신성한 바다의 예술, 오세아니아',
        period: '2025-04-30~2025-09-14',
        startdate: '2025-04-30',
        enddate: '2025-09-14',
        location: '국립중앙박물관 특별전시실2',
    },
    {
        title: '국보순회전, 모두가 함께하는 180일의 여정',
        period: '2025-05-20~2025-12-07',
        startdate: '2025-05-20',
        enddate: '2025-12-07',
        location: '고흥분청문화박물관 등 8개 지역 공립 박물관',
    },
    {
        title: '두 발로 세계를 제패하다',
        period: '2025-07-25~2025-12-28',
        startdate: '2025-07-25',
        enddate: '2025-12-28',
        location: '상설전시관 2층 기증1실',
    },
    {
        title: '각角진 백자 이야기',
        period: '2025-05-20~2025-12-07',
        startdate: '2025-05-20',
        enddate: '2025-12-07',
        location: '분청사기·백자실',
    },
];

export default function ExhibitionList() {
    const navigate = useNavigate();
    const authUser = useAuthStore((s) => s.authUser);
    const location = useLocation();
    const [searchInput, setSearchInput] = useState('');
    const inputRef = useRef(null);
    const [searchIdx, setSearchIdx] = useState(-1);

    useEffect(() => {
        setSearchInput('');
        setSearchIdx(-1);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    }, [location.pathname]);
    const handleSearch = () => {
        setSearchInput('');
        setSearchIdx(-1);
        if (inputRef.current?.value.trim() === '') {
            alert('검색어를 입력하세요');
            window.location.reload();
            return;
        }
        if (inputRef.current.value.length < 2) {
            alert('두글자 이상 입력해주세요');
            return;
        }
        // '두'라는 글자가 겹쳐서 디비에서 불러와서 map으로 할지 말지 고민중
        setSearchInput(inputRef.current?.value);
        for (let i = 0; i < exhibitionsBottom.length; i++) {
            if (exhibitionsBottom[i].title.includes(inputRef.current?.value)) {
                setSearchIdx(i);
                return;
            }
        }
    };
    const handleReserve = (exhibition, img) => {
        if (!authUser) {
            alert('로그인이 필요합니다.');
            return;
        }

        navigate('/reserve', {
            state: {
                title: exhibition.title,
                startdate: exhibition.startdate,
                enddate: exhibition.enddate,
                period: exhibition.period,
                location: exhibition.location,
                image: `/images/${img}`,
            },
        });
    };

    return (
        <div className="exhibitions">
            <div className="exhibitions-top">
                <div className="exhibition-top-item">
                    <div className="exhibition-top-list">
                        <div className="exhibition-top-list-item title">
                            <div>검색어</div>
                        </div>
                        <div className="exhibition-top-list-item">
                            <div className="search">
                                <input type="text" placeholder="검색어를 입력하세요" ref={inputRef} minLength={2} />
                            </div>
                        </div>
                        <div className="exhibition-top-list-item btn">
                            <div>
                                <button onClick={handleSearch}>검색</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h4>현재 전시</h4>
            </div>
            <div className="exhibitions-now">
                {searchInput === '' &&
                    exhibitionsImg.map((img, index) => (
                        <div key={index} className="exhibition-item">
                            <img src={`/images/${img}`} alt={img} />
                            <div className="exhibition-center-item">
                                <div className="exhibition-center-badge">특별전시</div>
                                <div className="exhibition-center-badge">테마전</div>
                            </div>
                            <div className="exhibition-bottom-item">
                                <div className="exhibition-bottom-cotent">
                                    <div className="exhibition-bottom-title">{exhibitionsBottom[index].title}</div>
                                    <div className="exhibition-bottom-period">{exhibitionsBottom[index].period}</div>
                                    <div className="exhibition-bottom-location">
                                        {exhibitionsBottom[index].location}
                                    </div>
                                </div>
                                <button
                                    className="exhibition-item-btn"
                                    onClick={() => handleReserve(exhibitionsBottom[index], img)}
                                >
                                    예약하기
                                </button>
                            </div>
                        </div>
                    ))}

                {searchInput !== null && searchIdx > -1 && (
                    <div className="exhibition-item">
                        <img src={`/images/${exhibitionsImg[searchIdx]}`} alt={exhibitionsImg[searchIdx]} />
                        <div className="exhibition-center-item">
                            <div className="exhibition-center-badge">특별전시</div>
                            <div className="exhibition-center-badge">테마전</div>
                        </div>
                        <div className="exhibition-bottom-item">
                            <div className="exhibition-bottom-cotent">
                                <div className="exhibition-bottom-title">{exhibitionsBottom[searchIdx].title}</div>
                                <div className="exhibition-bottom-period">{exhibitionsBottom[searchIdx].period}</div>
                                <div className="exhibition-bottom-location">
                                    {exhibitionsBottom[searchIdx].location}
                                </div>
                            </div>
                            <button
                                className="exhibition-item-btn"
                                onClick={() => handleReserve(exhibitionsBottom[searchIdx], exhibitionsImg[searchIdx])}
                            >
                                예약하기
                            </button>
                        </div>
                    </div>
                )}
                {searchInput !== '' && searchIdx === -1 && <div>'{searchInput}' 라는 이름의 전시는 없습니다</div>}
            </div>
        </div>
    );
}
