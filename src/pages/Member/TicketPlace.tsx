import { useParams } from "react-router-dom"
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
    const {placeId} = useParams();
    const [la, setLa] = useState(0);
    const [lo, setLo] = useState(0);

    useEffect(()=>{
        console.log(placeId);
        axios.get(`http://www.kopis.or.kr/openApi/restful/prfplc/${placeId}?service=11653933ac2447da843868e7cb625bdb`)
        .then((res)=>{
            const parser = new XMLParser();
            const data = parser.parse(res.data).dbs.db;
            console.log(data);
            setLa(data.la);
            setLo(data.lo);
        })

        let container = document.getElementById("map");
        let options = {
            center: new kakao.maps.LatLng(la, lo), // 지도 중심좌표
            level: 3 // 지도 레벨 (확대, 축소 정도)
        };

        let map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        let markerPosition = new kakao.maps.LatLng(la, lo); // 마커가 표시될 위치
        let marker = new kakao.maps.Marker({ // 마커 생성
            position: markerPosition
        });

        marker.setMap(map); // 마커 표시

    },[placeId])
    

    return(
        <Templete>
            <Header title={"행사장 위치"} />
            <Content>
                <div className="TicketPlace ">
                    <div id="map" style={{width: "100vw", height: "100vh"}}>
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