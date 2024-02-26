import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"

export default function useKakaoLoader() {
    useKakaoLoaderOrigin({
        appkey: "fcf8beb1ceba4f14f82072e9192c09a9",
        libraries: ["clusterer", "drawing", "services"],
    })
}