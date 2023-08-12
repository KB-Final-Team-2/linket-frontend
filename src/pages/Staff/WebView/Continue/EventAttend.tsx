import { useDispatch, useSelector } from "react-redux";
import AttendToggle from "../../../../components/Button/AttendToggle";
import { Attend } from "../../../../interface/Attendance";

interface props {
    attend: Attend;
}

const AttendList = ({ attend }: props) => {
    return (
        <div className="w-[790px] h-[50px] overflow-hidden border-b border-white flex">
            <div className="w-[90px] h-[50px] overflow-hidden border-r  border-white text-xl font-bold text-center text-white flex flex-shrink-0 items-center justify-center">
                {attend.attId}
            </div>
            <div className="w-[90px] h-[50px] overflow-hidden border-r  border-white text-xl font-bold text-center text-white flex flex-shrink-0 items-center justify-center">
                {attend.attHireId}
            </div>
            <div className="w-[90px] h-[50px] overflow-hidden  border-r border-white text-xl font-bold text-center text-white flex flex-shrink-0 items-center justify-center">
                {attend.attStartDatetime}
            </div>
            <div className="w-[90px] h-[50px] overflow-hidden border-r border-white text-xl font-bold text-center text-white flex flex-shrink-0 items-center justify-center">
                {attend.attEndDatetime}
            </div>
            <div className="w-[210px] h-[50px] overflow-hidden border-r border-white text-xl font-bold text-center text-white flex flex-shrink-0 items-center justify-center">
                0000-00-000000
            </div>
            <div className="w-[90px] h-[50px] overflow-hidden border-r border-white text-xl font-bold text-center text-white flex flex-shrink-0 items-center justify-center">
                ~
            </div>
            <div className="w-[130px] h-[50px] overflow-hidden text-xl font-bold text-center text-white flex flex-shrink-0 items-center justify-center">
                40,000
            </div>
        </div>
    )
}

const EventAttend = () => {
    const attend = useSelector((state: any) => state.attend);
    const attendList: Attend[] = useSelector((state:any)=>state.attend?.list);

    const handleStart = () => {
        // dispatch(updateStaffStart({attDate: attendDate, attEventId:event.eventId, attStartBtn:!attend.startState}))
    }

    const handleEnd = () => {
        // dispatch(updateEnd(!attend.endState))
    }

    return (
        <div className="w-[830px] h-full overflow-hidden flex justify-center items-center py-4">
            <div className="w-[790px] h-full overflow-auto border-y border-white flex flex-col flex-grow-0">
                <div className="w-[790px] h-[60px] overflow-hidden flex flex-shrink-0 flex-grow-0">
                    <div className="w-full h-full overflow-hidden text-2xl font-bold text-center text-white flex justify-center items-center">
                        <p className="">
                            2023.03.02
                        </p>
                    </div>
                    <div className="w-[300px] h-full overflow-hidden flex flex-shrink-0 items-center">
                        <div className="w-[150px] h-[50px] overflow-hidden flex">
                            <div className="w-[60px] h-full overflow-hidden text-xl font-bold text-center text-white flex flex-shrink-0 justify-center items-center">
                                출근
                            </div>
                            <AttendToggle state={attend.startState} func={() => { handleStart() }} />
                        </div>
                        <div className="w-[150px] h-[50px] overflow-hidden flex">
                            <div className="w-[60px] h-full overflow-hidden  text-xl font-bold text-center text-white flex flex-shrink-0 justify-center items-center">
                                퇴근
                            </div>
                            <AttendToggle state={attend.endState} func={() => { handleEnd() }} />
                        </div>
                    </div>
                </div>
                <div className="w-[790px] h-full overflow-hidden border-y border-white">
                    <div className="w-[790px] h-[45px] overflow-hidden bg-[#c4c4c4]/[0.31] border-b-2  border-white flex">
                        <div className="w-[90px] h-[45px] overflow-hidden border-t-0 border-r border-b-0 border-l-0 border-white">
                            <p className="text-lg font-bold text-center text-white">이름</p>
                        </div>
                        <div className="w-[90px] h-[45px] overflow-hidden border-t-0 border-r border-b-0 border-l-0 border-white">
                            <p className="w-[100px] text-lg font-bold text-center text-white">
                                공고 번호
                            </p>
                        </div>
                        <div className="w-[90px] h-[45px] overflow-hidden border-t-0 border-r border-b-0 border-l-0 border-white">
                            <p className="text-lg font-bold text-center text-white">
                                출근 시각
                            </p>
                        </div>
                        <div className="w-[90px] h-[45px] overflow-hidden border-t-0 border-r border-b-0 border-l-0 border-white">
                            <p className="text-lg font-bold text-center text-white">
                                퇴근 시각
                            </p>
                        </div>
                        <div className="w-[210px] h-[45px] overflow-hidden border-t-0 border-r border-b-0 border-l-0 border-white">
                            <p className="text-lg font-bold text-center text-white">
                                계좌 번호
                            </p>
                        </div>
                        <div className="w-[90px] h-[45px] overflow-hidden border-t-0 border-r border-b-0 border-l-0 border-white">
                            <p className="text-lg font-bold text-center text-white">
                                근무 시간
                            </p>
                        </div>
                        <div className="w-[130px] h-[45px] overflow-hidden">
                            <p className="text-lg font-bold text-center text-white">
                                일급(원)
                            </p>
                        </div>
                    </div>

                    <div className="w-[790px] h-full overflow-auto">
                        {attendList?.map((v, i) => (<AttendList key={i} attend={v} />))}
                    </div>
                </div>
                <div className="w-[790px] h-[100px] overflow-hidden flex flex-shrink-0">
                    <div className="w-[150px] h-[100px] overflow-hidden">
                        <p className="w-[150px] h-[100px] text-2xl font-bold text-center text-white">
                            총 일당 :{" "}
                        </p>
                    </div>
                    <div className="w-[640px] h-[100px] overflow-hidden">
                        <p className="w-[653px] h-[100px] text-2xl font-bold text-center text-white">
                            240,000원
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventAttend;