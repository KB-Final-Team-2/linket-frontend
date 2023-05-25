import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Templete from "../Templete";
import { INIT_REVIEW, ReviewWithEvent } from "../../interface/Review";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect } from "react";
import { getReviewList, setReview } from "../../redux/slice/reviewSlice";
import { User } from "../../interface/User";
import InfoReviewDetail from "./InfoReviewDetail";

const InfoReview = () => {
    const user: User = useSelector((state: any) => state.auth?.data);
    const review = useSelector((state: any) => state.review);
    const reviewData: ReviewWithEvent = review?.data;
    const reviewList: ReviewWithEvent[] = review?.list;
    const dispatch: any = useDispatch();

    useEffect(() => {
        dispatch(getReviewList(user.email));
    }, [user])

    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                {reviewData === INIT_REVIEW
                    ?
                    <>
                        <Header title="내 리뷰" />
                        <div className="w-[331px] h-full flex flex-col">
                            <div className="w-[331px] h-[580px] overflow-hidden border-y border-white">
                                {reviewList.map((review, i) => {
                                    return (<NextList key={i} title={review.eventName} func={() => { dispatch(setReview(review)) }} />)
                                })}
                            </div>
                        </div>
                    </>
                    :
                    <InfoReviewDetail />
                }
                <NavBar role="member" state="3" />
            </div>
        </Templete>
    )
}

export default InfoReview;