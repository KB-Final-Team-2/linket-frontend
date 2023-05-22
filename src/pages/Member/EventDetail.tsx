import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import { Event } from "../../interface/Event";
import { Company } from "../../interface/Company";
import { useSelector } from "react-redux";
import Templete from "../Templete";

const EventDetail = () => {

    const list = useSelector((state: any) => state.event?.list);

    const navigate = useNavigate();
    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                <Header title="이벤트 상세" />
                <div className="w-[331px] h-full">
                    <div className="w-[331px] h-[580px] overflow-hidden border-b border-t flex flex-col">
                        <List title="행사명" content={list[0].eventName} />
                        <List title="행사 분류" content={list[0].eventType} />
                        <List title="행사 기간" content={`${list[0].startDate} ~ ${list[0].endDate}`} />
                        <List title="행사 장소" content={list[0].place} />
                        <div className="w-[331px] h-full overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white flex">
                            <p className="w-[115px] h-full text-[15px] font-bold text-center text-white">
                                행사 설명
                            </p>
                            <p className="w-[215px] h-full text-[15px] font-bold text-center text-white">
                                {list[0].eventDesc}
                            </p>
                        </div>
                        <NextList title="리뷰 더보기" link={`/member/event/${1234}/review`} />
                    </div>
                </div>
                <NavBar role="member" state="1" />
            </div>
        </Templete>
    )
}

export default EventDetail;