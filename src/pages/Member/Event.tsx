import { useNavigate } from "react-router-dom";
import IndexHeader from "../../components/Header/IndexHeader";
import NavBar from "../../components/NavBar/NavBar";
import { Event } from "../../interface/Event";
import { Company } from "../../interface/Company";
import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";
import Templete from "../Templete";

const EventHome = () => {
    const navigate = useNavigate();

    const list = useSelector((state: any) => state.event.list);

    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                <IndexHeader title="Event" />
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[330px] h-[580px] overflow-hidden border-t border-b border-white flex flex-col relative">
                        <p className="w-[330px] h-[45px] text-xl font-bold text-left text-white">
                            전체 이벤트
                        </p>
                        <div className="w-[330px] h-full flex flex-col">
                            <div className="w-full h-full overflow-scroll flex flex-row flex-shrink-0">
                                <div className="w-[300px] h-[400px] overflow-hidden block">
                                    <div
                                        className="w-[237px] h-[356px] overflow-hidden bg-white"
                                        onClick={() => { navigate(`/member/event/${1234}`) }}>
                                        <p className="w-[237px] h-[356px] text-[40px] font-bold text-center text-secondary">
                                            poster.jpg
                                        </p>
                                    </div>
                                    <div className="w-[301px] h-11 overflow-hidden">
                                        <p className="w-[301px] h-11 font-bold text-center text-white">
                                            {list[0].eventName}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[300px] h-[400px] overflow-hidden block">
                                    <div className="w-[237px] h-[356px] overflow-hidden bg-white">
                                        <p className="w-[237px] h-[356px] text-[40px] font-bold text-center text-secondary">
                                            poster.jpg
                                        </p>
                                    </div>
                                    <div className="w-[301px] h-11 overflow-hidden">
                                        <p className="w-[301px] h-11 font-bold text-center text-white">
                                            {list[1].eventName}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-10 flex flex-shrink-0 justify-center">
                            <Button title="Search" type="default" func={() => { navigate("/member/event/search") }} />
                        </div>
                    </div>
                </div>
                <NavBar role="member" state="1" />
            </div>
        </Templete>
    )
}

export default EventHome;