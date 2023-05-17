import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import SelectButton from "../../components/Button/SelectButton";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

const EventSearch = () => {
    const navigate = useNavigate();
    return (
        <div className="w-[375px] h-[812px] overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="행사 검색" />
            <div className="w-[331px] h-full">
                <div className="w-[330px] h-[580px] overflow-hidden border-t border-b">
                    <p className="w-[330px] h-[45px] text-xl font-bold text-left text-white">
                        검색 조건
                    </p>
                    <div className="w-[330px] h-full overflow-hidden flex flex-col">
                        <div className="w-[330px] h-10 bg-background-light/30 rounded-lg shrink-0 mb-2" />
                        <div className="w-[331px] h-[324px] overflow-hidden flex flex-shrink-0 border-y">
                            <div className="w-[60px] h-[324px] overflow-hidden border-r flex flex-shrink-0 justify-center itmes-center">
                                <p className="text-[15px] font-bold text-center text-white">
                                    행사<br />기간
                                </p>
                            </div>
                            <div className="w-full h-[324px] overflow-hidden">
                                <div className="w-[270px] h-14 overflow-hidden border-b flex justify-center items-center text-xl font-bold text-white">
                                    2023
                                </div>
                                <div className="w-[270px] h-[268px] overflow-hidden flex flex-col gap-8 px-5 py-7">
                                    <div className="w-full flex justify-between">
                                        <SelectButton state={false} title={"1월"} func={() => { }} />
                                        <SelectButton state={false} title={"2월"} func={() => { }} />
                                        <SelectButton state={false} title={"3월"} func={() => { }} />
                                    </div>
                                    <div className="w-full flex justify-between">
                                        <SelectButton state={false} title={"4월"} func={() => { }} />
                                        <SelectButton state={false} title={"5월"} func={() => { }} />
                                        <SelectButton state={false} title={"6월"} func={() => { }} />
                                    </div>
                                    <div className="w-full flex justify-between">
                                        <SelectButton state={false} title={"7월"} func={() => { }} />
                                        <SelectButton state={false} title={"8월"} func={() => { }} />
                                        <SelectButton state={false} title={"9월"} func={() => { }} />
                                    </div>
                                    <div className="w-full flex justify-between">
                                        <SelectButton state={false} title={"10월"} func={() => { }} />
                                        <SelectButton state={false} title={"11월"} func={() => { }} />
                                        <SelectButton state={false} title={"12월"} func={() => { }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[330px] h-[60px] overflow-hidden flex border-b flex-shrink-0">
                            <div className="w-[60px] h-[60px] overflow-hidden border-r flex flex-shrink-0 justify-center items-center text-[15px] font-bold text-center text-white">
                                행사<br />종류
                            </div>
                            <div className="w-full h-[60px] overflow-hidden flex justify-between items-center px-4">
                                <SelectButton state={false} title={"Concert"} func={() => { }} />
                                <SelectButton state={false} title={"Festival"} func={() => { }} />
                                <SelectButton state={false} title={"etc."} func={() => { }} />
                            </div>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <Button title="Search" type="default" func={() => {navigate(`/member/event/search/result`)}} />
                        </div>
                    </div>
                </div>
            </div>
            <NavBar role="member" state="1" />
        </div>
    )
}

export default EventSearch;