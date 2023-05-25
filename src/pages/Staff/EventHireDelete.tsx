import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";
import { Event } from "../../interface/Event";
import Templete from "../Templete";
import { Hire } from "../../interface/Hire";
import { deleteHire, setHire } from "../../redux/slice/hireSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Content from "../Templete/Content";

const EventHireDelete = () => {
    const [isOk, setIsOk] = useState(false);
    const event: Event = useSelector((state: any) => state.event?.data);
    const hire = useSelector((state: any) => state.hire);
    const hireData: Hire = hire?.data;
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const list = [
        { title: "공고명", content: hireData?.workName },
        { title: "근무 기간", content: `${hireData?.workStartDate} ~ ${hireData?.workEndDate}` },
        { title: "근무 시간", content: `${hireData?.workHour}` },
        { title: "등록 일자", content: `${hireData?.regDate}` }
    ]

    const handleDelete = () => {
        // dispatch(deleteHire(hireData.hireId))
        // .then(unwrapResult)
        // .then(()=>{
        //     dispatch(setHire(INIT_HIRE));
        //     setIsOk(true);
        // })
        setIsOk(true);
    }

    return (
        <Templete>
            <Header title="공고 삭제" />
            <Content>
                {isOk
                    ?
                    <>
                        <div className="w-[331px] h-full overflow-hidden flex flex-col gap-2 place-content-center">
                            <p className="inline w-fit h-fit justify-center items-center text-lg">
                                공고 삭제가 완료되었습니다.<br />
                                삭제된 공고는 복구할 수 없으며,<br />
                                해당 공고와 연결된 근태 정보도 삭제됩니다.<br />
                            </p>
                        </div>
                        <div className="w-[330px] h-[140px] overflow-hidden flex flex-shrink-0 justify-center items-center px-10">
                            <Button title="Home" type="default" func={() => { navigate("/staff") }} />
                        </div>
                    </>
                    :
                    <>
                        <div className="w-[331px] h-fit overflow-hidden border-white">
                            {list.map((v, i) => {
                                return (<List key={i} title={v.title} content={v.content} />)
                            })}
                        </div>
                        <div className="w-[331px] h-full top-[177px] overflow-hidden">
                            <div className="w-[331px] h-[244px] overflow-hidden flex flex-col justify-center items-center">
                                <p className="w-[331px] text-xl font-bold text-center text-white flex flex-col gap-3">
                                    <span className="w-[330px] text-xl font-bold text-center text-white">
                                        해당 공고를 삭제하시겠습니까?
                                    </span>
                                    <br />
                                    <span className="w-[331px] text-[16px] font-bold text-center text-white">
                                        삭제된 공고는 복구할 수 없으며,
                                    </span>
                                    <span className="w-[331px] text-[16px] font-bold text-center text-white">
                                        해당 공고와 연결된 근태 정보도 삭제됩니다.
                                    </span>
                                </p>
                            </div>
                            <div className="w-[331px] h-[202px] overflow-hidden flex justify-center items-center px-10">
                                <Button title={"Delete"} type={"delete"} func={() => { handleDelete() }} loading={hire?.loading} />
                            </div>
                        </div>
                    </>
                }
            </Content>
            <NavBar role="staff" state="1" />
        </Templete>
    )
}
export default EventHireDelete; 