import React from "react";
import { Map } from "react-kakao-maps-sdk";
export default function VisitUs() {
    return (
        <div>
            <h1>오시는길</h1>
            <Map center={{ lat: 37.551888, lng: 126.980166 }} style={{ width: "1000px", height: "600px" }} level={3} />
        </div>
    );
}
