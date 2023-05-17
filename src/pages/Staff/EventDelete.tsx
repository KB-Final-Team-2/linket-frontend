import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";

const EventDelete = () => {
    const list = [{ title: "행사명", content: "KB IT's Your Life" }, { title: "행사분류", content: "Concert" }, { title: "행사 기간", content: "2023.03.02~2023.05.31" }, { title: "행사 장소", content: "멀티캠퍼스 선릉" }]
    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="행사 삭제" />
            <div className="w-[331px] h-full">
                <div className="w-[331px] h-[580] overflow-hidden">
                    <div className="w-[331px] h-fit overflow-hidden border border-white">
                        {list.map((el) => {
                            return (<List title={el.title} content={el.content} />)
                        })}
                    </div>
                    <div className="w-[331px] h-full top-[177px] overflow-hidden">
                        <div className="w-[331px] h-[244px] overflow-hidden flex flex-col justify-center items-center">
                            <p className="w-[331px] text-xl font-bold text-center text-white flex flex-col gap-3">
                                <span className="w-[330px] text-xl font-bold text-center text-white">
                                    해당 행사를 삭제하시겠습니까?
                                </span>
                                <br />
                                <span className="w-[331px] text-[16px] font-bold text-center text-white">
                                    삭제된 행사는 복구할 수 없으며,
                                </span>
                                <span className="w-[331px] text-[16px] font-bold text-center text-white">
                                    기존에 등록된 리뷰 및 이미지가 모두 삭제됩니다.
                                </span>
                            </p>
                        </div>
                        <div className="w-[331px] h-[202px] overflow-hidden flex justify-between items-center px-10">
                            <Button title={"return"} type={"default"} func={()=>{}} />
                            <Button title={"Delete"} type={"delete"} func={()=>{}} />
                        </div>
                    </div>
                </div>
            </div>
            <NavBar role="staff" state="1" />
        </div>
    )
}
export default EventDelete; 