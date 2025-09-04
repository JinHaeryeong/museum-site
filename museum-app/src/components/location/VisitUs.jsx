import "../../assets/styles/visitus.css";
import { Map, MapMarker } from "react-kakao-maps-sdk";
export default function VisitUs() {
    return (
        <div>
            <h1>오시는길</h1>
            <div className='visit-us'>
                <div className='visit-us-map'>
                    <Map
                        center={{ lat: 37.52385, lng: 126.980467 }}
                        style={{ width: "1000px", height: "600px" }}
                        level={3}
                    >
                        <MapMarker position={{ lat: 37.5239, lng: 126.9802 }}>
                            <div style={{ color: "#000" }}>박물관</div>
                        </MapMarker>
                    </Map>
                </div>
            </div>
        </div>
    );
}
