import { useDispatch, useSelector } from "react-redux";
import { Hire } from "../../../../interface/Hire";
import { useState } from "react";
import Button from "../../../../components/Button/Button";
import { setCreateHireModal, setDeleteHireModal } from "../../../../redux/slice/modalSlice";
import { setHire } from "../../../../redux/slice/hireSlice";

interface ListInfo {
    title: string;
    content: string;
}

interface props {
    hire: Hire;
    func: Function;
    state: boolean;
}

const HireList = ({ hire, func, state }: props) => {
    return (
        <div
            className="w-[720px] h-[60px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white flex justify-between items-center hover:bg-white/50"
            onClick={() => { func() }}
        >
            <p className="text-[28px] font-bold text-center text-white">
                {hire.hireName}
            </p>
            <p className="text-xl font-bold text-center text-[#d9d9d9]">
                {hire.regDate}
            </p>
        </div>
    )
}

const SmallHireList = ({ hire, func, state }: props) => {
    return (
        <div
            className={`w-[200px] h-[60px] overflow-hidden ${state && "bg-black/25"} hover:bg-white/50 border-t-0 border-r-0 border-b border-l-0 border-white`}
            onClick={() => { func() }}
        >
            <p className="text-[28px] font-bold text-center text-white">
                {hire.hireName}
            </p>
        </div>
    )
}

const HireInfoList = ({ title, content }: ListInfo) => {
    return (
        <div className="w-[590px] h-[55px] overflow-hidden border-b border-white flex flex-shrink-0">
            <div className="w-[150px] h-full overflow-hidden text-2xl font-bold text-center text-white flex flex-shrink-0 items-center justify-center">
                {title}
            </div>
            <div className="w-[440px] h-[55px] overflow-hidden text-2xl font-bold text-center text-white flex flex-shrink-0 items-center justify-center">
                {content}
            </div>
        </div>
    )
}

const EventHire = () => {
    const [idx, setIdx] = useState(-1);
    const hire : Hire = useSelector((state:any)=>state.hire.hire);
    const hireList: Hire[] = useSelector((state: any) => state.hire.hireList);
    const dispatch = useDispatch();
    const infoList: ListInfo[] = [
        { title: "공고 번호", content: `${idx}` },
        { title: "공고명", content: hire?.hireName },
        { title: "근무일", content: `${hire?.startDate} ~ ${hire?.endDate}` },
        { title: "근무 시간", content: `${hire?.workHour}` },
        { title: "시급", content: `${hire?.pay}` },
        { title: "등록 코드", content: `${hire?.hireId}` },
        { title: "등록 일자", content: `${hire?.regDate}` },
    ];

    const handleHire = (hire:Hire, idx:number) => {
        dispatch(setHire(hire));
        setIdx(idx);
    }

    return (
        <div className="w-[830px] h-full overflow-hidden flex justify-center items-center py-4">
            <div className="w-[790px] h-full overflow-auto border-y border-white flex justify-center items-center">
                {idx === -1 ? (
                    <div className="w-[720px] h-full overflow-hidden">
                        <div className="w-[720px] h-[300px]">
                            <div
                                className="w-[720px] h-[50px] overflow-hidden bg-white/[0.12] hover:bg-white/50 flex flex-shrink-0 flex-grow-0 justify-center items-center"
                                onClick={()=>{ dispatch(setCreateHireModal())}}
                            >
                                <p className="text-xl font-bold text-center text-white">
                                    + 새 공고 추가
                                </p>
                            </div>
                            {hireList.map((v, i) => (
                                <HireList key={i} hire={v} func={() => {handleHire(v,i)}} state={i === idx} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="w-[790px] h-full overflow-hidden border-y border-white flex">
                        <div className="w-[200px] h-[730px] overflow-hidden">
                            <div className="w-[200px] h-[50px] overflow-hidden bg-white/[0.12] hover:bg-white/50 flex flex-shrink-0 flex-grow-0 justify-center items-center">
                                <p className="text-xl font-bold text-center text-white">
                                    + 새 공고 추가
                                </p>
                            </div>
                            {hireList.map((v, i) => (
                                <SmallHireList key={i} hire={v} func={() => { handleHire(v,i) }} state={i === idx} />
                            ))}
                        </div>
                        <div className="w-[590px] h-full overflow-hidden bg-black/25 flex flex-col flex-grow-0 flex-shrink">
                            {infoList.map((v, i) => (
                                <HireInfoList key={i} title={v.title} content={v.content} />
                            ))}
                            <div className="w-[590px] h-full overflow-hidden border-b border-white flex flex-shrink">
                                <div className="w-[150px] h-[70px] overflow-hidden">
                                    <p className="text-2xl font-bold text-center text-white">사전 교육 정보</p>
                                </div>
                                <div className="w-[440px] h-[55px] overflow-hidden">
                                    <p className="text-2xl font-bold text-center text-white">
                                        {hire?.edu}
                                    </p>
                                </div>
                            </div>
                            <div className="w-[590px] h-[70px] overflow-hidden flex flex-shrink-0 flex-grow-0 justify-center items-center">
                                <Button title={"Delete"} type={"delete"} func={() => { dispatch(setDeleteHireModal())}} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default EventHire;