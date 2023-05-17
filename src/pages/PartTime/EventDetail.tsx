import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";

const EventDetail = () => {
    const list = [{ title: "안녕하세요", content: "반갑습니다." },
    { title: "안녕하세요", content: "반갑습니다." },
    { title: "안녕하세요", content: "반갑습니다." },
    { title: "안녕하세요", content: "반갑습니다." }];

    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="행사 상세" />
            <div className="w-[331px] h-full flex flex-col">
                <div className="w-[331px] h-[580px] flex flex-col border-y">
                    <div className="w-[331px] h-full overflow-hidden border-y border-white flex flex-col">
                        {list.map((el) => {
                            return (<List title={el.title} content={el.content} />)
                        })}
                    </div>
                    <div className="w-full h-[156px] flex flex-shrink-0 flex-grow-0">
                        <div className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9] text-[15px] font-bold text-left text-black flex justify-center items-center flex-shrink-0">
                            근태 관리
                        </div>
                        <div className="w-[153px] h-[156px] overflow-hidden flex flex-col justify-center items-center gap-5">
                            <Button title={"Delete"} type={"delete"} func={()=>{}} />
                            <Button title={"Review"} type={"default"} func={()=>{}} />
                        </div>
                    </div>
                </div>
            </div>
            <NavBar state="1" />
        </div>
    )

}
export default EventDetail;