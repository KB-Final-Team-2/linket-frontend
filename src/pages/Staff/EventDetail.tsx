import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";

const EventDetail = () => {
    const list = [{ title: "행사명", content: "KB IT's Your Life" }, { title: "행사 분류", content: "Concert" }, { title: "행사 기간", content: "2023.03.02 ~ 2023.05.31" }, { title: "행사명", content: "멀티캠퍼스 선롱" }, { title: "행사 코드", content: "1234567890" }, { title: "행사 포스터", content: "event_poster.jpg" }, { title: "행사 정보 이미지", content: "event_info.jpg" }]
    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="행사 상세" />
            <div className="w-[331px] h-full flex">
                <div className="w-full h-[580px] flex flex-col border-t border-b pb-5">
                    <div className="w-[331px] h-[580px] overflow-hidden">
                        {list.map((v, i) => {
                            return (<List key={i} title={v.title} content={v.content} />)
                        })}
                        <div className="w-[330px] h-[207px] overflow-hidden border-b flex">
                            <p className="w-[115px] h-[207px] text-[15px] font-bold text-center text-white">
                                행사 설명
                            </p>
                            <p className="w-[215px] h-[207px] text-[15px] font-bold text-center text-white">
                                주니어 개발자들의 실력 행사가 시작된다! 새로 개발자가 되고 싶은 꿈나무부터 숨겨진 고인물까지
                                모두 모이는 이 곳!
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-[158px] flex flex-shrink-0 justify-between">
                        <Link to="/staff/event/attend" className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9] text-[15px] font-bold text-left text-black flex flex-shrink-0 justify-center items-center">
                            출결 관리
                        </Link>
                        <Link to="#" className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9] text-[15px] font-bold text-left text-black flex flex-shrink-0 justify-center items-center">
                            리뷰 보기
                        </Link>
                    </div>
                </div>
            </div>
            <NavBar role="staff" state="1" />
        </div>
    )
}
export default EventDetail;