import '../../assets/styles/Exhibitions.css';
import { useNavigate } from 'react-router-dom';
const imgName = 'exhibition';
const exhibitionsImg = [`${imgName}_img1.jpg`, `${imgName}_img2.png`, `${imgName}_img3.jpg`, `${imgName}_img4.jpg`];
const exhibitionsBottom = [
    {
        title: '마나 모아나-신성한 바다의 예술, 오세아니아',
        period: '2025-04-30~2025-09-14',
        location: '국립중앙박물관 특별전시실2',
    },
    {
        title: '국보순회전, 모두가 함께하는 180일의 여정',
        period: '2025-05-20~2025-12-07',
        location: '고흥분청문화박물관 등 8개 지역 공립 박물관',
    },
    {
        title: '두 발로 세계를 제패하다',
        period: '2025-07-25~2025-12-28',
        location: '상설전시관 2층 기증1실',
    },
    {
        title: '각角진 백자 이야기',
        period: '2025-05-20~2025-12-07',
        location: '분청사기·백자실',
    },
];
export default function ExhibitionList() {
    const navigate = useNavigate();

    return (
        <div className="exhibitions">
            {exhibitionsImg.map((img, index) => (
                <div key={index} className="exhibition-item">
                    <img src={`/images/${img}`} alt={`${img}`} />
                    <div className="exhibition-center-item">
                        <div className="exhibition-center-badge">특별전시</div>
                        <div className="exhibition-center-badge">테마전</div>
                    </div>
                    <div className="exhibition-bottom-item">
                        <div className="exhibition-bottom-cotent">
                            <div className="exhibition-bottom-title">{exhibitionsBottom[index].title}</div>
                            <div className="exhibition-bottom-period">{exhibitionsBottom[index].period}</div>
                            <div className="exhibition-bottom-location">{exhibitionsBottom[index].location}</div>
                        </div>
                        <button
                            className="exhibition-item-btn"
                            onClick={() =>
                                navigate('/reserve', {
                                    state: {
                                        title: exhibitionsBottom[index].title,
                                        period: exhibitionsBottom[index].period,
                                        location: exhibitionsBottom[index].location,
                                        image: `/images/${img}`,
                                    },
                                })
                            }
                        >
                            예약하기
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
