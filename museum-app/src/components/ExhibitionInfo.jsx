import '../assets/styles/exhibitionInfo.css';

export default function ExhibitionInfo() {
    return (
        <div className="exhibition-wrapper">
            <h2>전시 정보</h2>
            <hr />
            <div className="exhibition-content">
                <img className="exhibition-image" src="../src/assets/images/exhibition_1.jpg" alt="전시 포스터" />
                <h3>마나 모아나-신성한 바다의 예술, 오세아니아</h3>
                <div className="exhibition-details">
                    <p>
                        <strong>전시 기간:</strong> 2025-04-30 ~ 2025-09-14
                    </p>
                    <p>
                        <strong>전시 장소:</strong> 국립중앙박물관 특별전시실2
                    </p>
                    <p>
                        <strong>관람 가능 시간:</strong> 10:00 ~ 18:00
                    </p>
                </div>
            </div>
        </div>
    );
}
