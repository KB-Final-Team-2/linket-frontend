import { useState } from "react";
import ContinueEvent from "./ContinueEvent";
import NavButton from "../../../components/NavBar/WebNavButton";
import EndedEvent from "./EndedEvent";

import WebUserButton from "../../../components/Button/WebUserButton";
import UpdateEventModal from "../../../components/Modal/UpdateEventModal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/slice/modalSlice";
import CreateEventModal from "../../../components/Modal/CreateEventModal";
import DeleteEventModal from "../../../components/Modal/DeleteEventModal";
import CreateHireModal from "../../../components/Modal/CreateHireModal";
import DeleteHireModal from "../../../components/Modal/DeleteHireModal";

interface buttonInfo {
    text: string;
    state: string;
}

const modalStyle = {
    overlay: {
        position: 'fixed',
        top:0,
        bottom:0,
        left:0,
        right:0,
    },
    content:{
        display:"flex",
        flexDirection: 'column'
    }
}

const WebView = () => {
    const [event, setEvent] = useState("continue");
    const modal = useSelector((state:any)=>state.modal.current);
    const dispatch = useDispatch();

    const navList: buttonInfo[] = [{ text: "진행중인 행사", state: "continue" }, { text: "종료된 행사", state: "ended" }];

    return (
        <>
            <div className="w-full h-screen flex flex-grow-0 flex-shrink-0 justify-center items-center">
                <div
                    className="flex-grow-0 flex-shrink-0 w-full h-full overflow-hidden justify-center items-center flex flex-col"
                    style={{
                        background:
                            "linear-gradient(to bottom, #454545 0%, rgba(69,69,69,0.93) 43.23%, rgba(33,33,33,0.97) 99.99%)",
                    }}
                >
                    <div className="w-full h-[70px] overflow-visible bg-black flex justify-center items-center">
                        <div className="w-[1080px] h-[70px] overflow-visible flex flex-grow-0 flex-shrink-0 justify-between">
                            <div className="w-fit h-full flex">
                                {navList.map((v, i) => (
                                    <NavButton text={v.text} state={event === v.state} func={() => { setEvent(v.state) }} />
                                ))}
                            </div>
                            <WebUserButton />
                        </div>
                    </div>
                    {event === "continue" ? <ContinueEvent /> : <EndedEvent />}
                </div>
            </div>
            {modal==="createEvent"&&<CreateEventModal />}
            {modal==="updateEvent"&&<UpdateEventModal />}
            {modal==="deleteEvent"&&<DeleteEventModal />}
            {modal==="createHire"&&<CreateHireModal />}
            {modal==="deleteHire"&&<DeleteHireModal />}
        </>
    )
}

export default WebView;