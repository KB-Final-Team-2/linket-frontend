import { useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import NavBar from "../../components/NavBar/NavBar"
import Templete from "../Templete"
import Content from "../Templete/Content"
import { useEffect, useState } from "react"
import axios from "axios"
import { XMLParser } from "fast-xml-parser"

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
    },[])


    return(
        <Templete>
            <Header title={"행사장 위치"} />
            <Content>
                <div>
                    위도: {la}<br/>
                    경도: {lo}
                </div>
            </Content>
            <NavBar state={"1"} role={"staff"}/>
        </Templete>
    )
}

export default TicketPlace;