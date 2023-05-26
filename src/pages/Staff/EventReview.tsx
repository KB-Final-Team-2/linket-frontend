import { useDispatch, useSelector } from "react-redux";
import { Event } from "../../interface/Event";
import Header from "../../components/Header/Header";
import TableInfo from "../../components/Table/TableInfo";
import { Review, ReviewWithUser } from "../../interface/Review";
import { useEffect } from "react";
import { getEventReviewList } from "../../redux/slice/reviewSlice";
import Content from "../Templete/Content";

interface props {
    onRequestReturn: Function;
}

const EventReview = ({ onRequestReturn }: props) => {
    const event: Event = useSelector((state: any) => state.event?.data);
    const review = useSelector((state: any) => state.review);
    const dispatch: any = useDispatch();
    const eventReviewList: ReviewWithUser[] = review.eventReviewList;

    useEffect(() => {
        dispatch(getEventReviewList(event.eventId));
    }, [])

    return (
        <>
            <Header title="리뷰 통계" func={onRequestReturn} />
            <Content>
                <TableInfo title={"행사명"} content={event?.eventName} />
                <TableInfo title={"전체 리뷰 수"} content={`${eventReviewList.length}`} />
                <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden">
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[60px] overflow-hidden  border-b border-white">
                        <div className="text-place-center self-stretch flex-grow-0 flex-shrink-0 w-[80px] overflow-hidden border-r border-white text-[15px] font-bold text-center text-white">
                            시설<br />(좌석)
                        </div>
                        <div className="text-place-center w-full self-stretch flex-grow relative overflow-hidden gap-2.5 border-r  border-white text-[15px] font-bold text-center text-white">
                            {`${(eventReviewList.reduce((pre, cur) => { return pre + cur.rateFacilChair }, 0) / eventReviewList.length).toFixed(1)}`}/5.0
                        </div>
                        <div className="text-place-center self-stretch flex-grow-0 flex-shrink-0 w-[80px] overflow-hidden border-r border-white text-[15px] font-bold text-center text-white">
                            시설<br />(화장실)
                        </div>
                        <div className="text-place-center w-full self-stretch flex-grow relative overflow-hidden gap-2.5  border-white text-[15px] font-bold text-center text-white">
                            {`${(eventReviewList.reduce((pre, cur) => { return pre + cur.rateFacilRest }, 0) / eventReviewList.length).toFixed(1)}`}/5.0
                        </div>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[60px] overflow-hidden  border-b border-white">
                        <div className="text-place-center self-stretch flex-grow-0 flex-shrink-0 w-[80px] overflow-hidden border-r border-white text-[15px] font-bold text-center text-white">
                            직원<br />(입장 안내)
                        </div>
                        <div className="text-place-center w-full self-stretch flex-grow relative overflow-hidden gap-2.5 border-r  border-white text-[15px] font-bold text-center text-white">
                            {`${(eventReviewList.reduce((pre, cur) => { return pre + cur.rateStaffIn }, 0) / eventReviewList.length).toFixed(1)}`}/5.0
                        </div><div className="text-place-center self-stretch flex-grow-0 flex-shrink-0 w-[80px] overflow-hidden border-r border-white text-[15px] font-bold text-center text-white">
                            직원<br />(티켓 발급)
                        </div>
                        <div className="text-place-center w-full self-stretch flex-grow relative overflow-hidden gap-2.5 text-[15px] font-bold text-center text-white">
                            {`${(eventReviewList.reduce((pre, cur) => { return pre + cur.rateStaffTicket }, 0) / eventReviewList.length).toFixed(1)}`}/5.0
                        </div>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[60px] overflow-hidden  border-b border-white">
                        <div className="text-place-center self-stretch flex-grow-0 flex-shrink-0 w-[80px] overflow-hidden border-r border-white text-[15px] font-bold text-center text-white">
                            행사 구성
                        </div>
                        <div className="text-place-center w-full self-stretch flex-grow relative overflow-hidden gap-2.5 border-r  border-white text-[15px] font-bold text-center text-white">
                            {`${(eventReviewList.reduce((pre, cur) => { return pre + cur.rateEventContent }, 0) / eventReviewList.length).toFixed(1)}`}/5.0
                        </div>
                        <div className="text-place-center self-stretch flex-grow-0 flex-shrink-0 w-[80px] overflow-hidden border-r border-white text-[15px] font-bold text-center text-white">
                            행사 진행
                        </div>
                        <div className="text-place-center w-full self-stretch flex-grow relative overflow-hidden gap-2.5 text-[15px] font-bold text-center text-white">
                            {`${(eventReviewList.reduce((pre, cur) => { return pre + cur.rateEventGo }, 0) / eventReviewList.length).toFixed(1)}`}/5.0
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden">
                        <div className="text-place-center self-stretch flex-grow-0 flex-shrink-0 h-10 border-b border-white text-[15px] font-bold text-left text-white px-3">
                            기타 의견
                        </div>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-auto custom-toolbar">
                            {eventReviewList.map((v, i) => (
                                <div key={i} className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden p-2 border-y border-white">
                                    {v.reviewEtc}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Content>
        </>
    )
}

export default EventReview;