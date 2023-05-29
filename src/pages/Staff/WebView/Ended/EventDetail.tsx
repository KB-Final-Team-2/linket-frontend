import { useSelector } from "react-redux";
import WebEventInfoList from "../../../../components/List/WebEventInfoList";
import { Event } from "../../../../interface/Event";

interface ListInfo {
    title: string;
    content: string;
}

const EventDetail = () => {
    const event: Event = useSelector((state: any) => state.event?.data);
    const infoList: ListInfo[] = [
        { title: "등록 일자", content: event.regDate },
        { title: "행사 기간", content: `${event.startDate} ~ ${event.endDate}` },
        { title: "행사 장소", content: event.place },
        { title: "참여 인원", content: `관람객: 00명파트타임 00명`},
        {title: "총 인건비", content: "1234만원"},
    ];

    return (
        <div className="w-[830px] h-[770px] overflow-hidden flex flex-shrink flex-grow-0 justify-center items-center">
            <div className="w-[790px] h-[730px] overflow-hidden border-y border-white flex flex-col flex-grow-0 flex-shrink-0">
                {infoList?.map((v, i) => (
                    <WebEventInfoList key={i} title={v.title} content={v.content} />
                ))}
                <div className="w-[790px] h-[380px] overflow-hidden border-b border-white flex flex-shrink-0 flex-grow-0">
                    <div className="w-[200px] h-full overflow-hidden items-center justify-center flex">
                        <p className="text-2xl font-bold text-center">
                            행사 설명
                        </p>
                    </div>
                    <div className="w-[590px] h-full overflow-hidden items-center justify-center flex">
                        <p className="text-2xl font-bold text-center text-white">
                            {event.eventDesc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetail;