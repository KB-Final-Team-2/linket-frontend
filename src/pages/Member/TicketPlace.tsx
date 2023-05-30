import { useParams, useSearchParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import NavBar from "../../components/NavBar/NavBar"
import Templete from "../Templete"
import Content from "../Templete/Content"
import { useEffect, useState } from "react"
import axios from "axios"
import { XMLParser } from "fast-xml-parser"

declare global {
    interface Window {
        kakao: any;
    }
}

const {kakao} = window;

const TicketPlace = () => {
    const [la, setLa] = useState("0");
    const [lo, setLo] = useState("0");
    const [searchParams] = useSearchParams();
    const queryList : any[] = [...searchParams];

    const handleMap = () => {
        let container = document.getElementById("map");
        const tmpLa = queryList.filter((el)=>el[0]==="la")[0][1];
        const tmpLo = queryList.filter((el)=>el[0]==="lo")[0][1];
        setLa(tmpLa);
        setLo(tmpLo);
        console.log(queryList);
        let options = {
            center: new kakao.maps.LatLng(tmpLa, tmpLo), // 지도 중심좌표
            level: 3 // 지도 레벨 (확대, 축소 정도)
        };

        let map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        let markerPosition = new kakao.maps.LatLng(tmpLa, tmpLo); // 마커가 표시될 위치
        let marker = new kakao.maps.Marker({ // 마커 생성
            position: markerPosition
        });

        marker.setMap(map); // 마커 표시
    }

    useEffect(()=>{
        handleMap();
    },[searchParams]);

    return(
        <Templete>
            <Header title={"행사장 위치"} />
            <Content>
                <div className="TicketPlace h-full">
                    <div id="map" style={{width: "100%", height: "100%"}}>
                        위도: {la}<br/>
                        경도: {lo}
                    </div>
                </div>
            </Content>
            <NavBar state={"1"} role={"staff"}/>
        </Templete>
    )
}

export default TicketPlace;