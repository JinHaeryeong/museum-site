import '../../assets/styles/exhibitionInfo.css';

export default function ExhibitionInfo({ title, period, location, image }) {
    return (
        <div className="exhibition-wrapper">
            <h2>전시 정보</h2>
            <hr />
            <div className="exhibition-content">
                <img className="exhibition-image" src={image} alt="전시 포스터" />
                <h3>{title}</h3>
                <div className="exhibition-details">
                    <p>
                        <strong>전시 기간:</strong> {period}
                    </p>
                    <p>
                        <strong>전시 장소:</strong> {location}
                    </p>
                    <p>
                        <strong>관람 가능 시간:</strong> 10:00 ~ 18:00
                    </p>
                </div>
            </div>
        </div>
    );
}
