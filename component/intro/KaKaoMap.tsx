import React from 'react';
import styles from '@/styles/Location.module.css';
import {Map, MapMarker} from "react-kakao-maps-sdk"
import useKakaoLoader from "@/component/intro/useKakaoLoader";

function KaKaoMap() {
    useKakaoLoader()
    return(
        <div className={styles.kakaomapbox}>
            <Map
                center={{ lat: 35.5034404630558, lng: 129.098915633738 }}
                style={{ width: "100%", height: "430px" }}
            >
                <MapMarker position={{ lat: 35.5034404630558, lng: 129.098915633738 }} >
                    <div className={styles.mapbox}>중산기업 본사</div>
                </MapMarker>
            </Map>

        </div>
    )
}

export default KaKaoMap