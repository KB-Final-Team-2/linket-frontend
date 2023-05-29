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
import Content from "../Templete/Content";

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
            {reviewData.reviewId === -1
                ?
                <>
                    <Header title="내 리뷰" />
                    <Content>
                        {reviewList?.map((review, i) => {
                            return (<NextList key={i} title={review.eventName} func={() => { dispatch(setReview(review)) }} />)
                        })}
                    </Content>
                </>
                :
                <InfoReviewDetail />
            }
            <NavBar role="member" state="3" />
        </Templete>
    )
}

export default InfoReview;