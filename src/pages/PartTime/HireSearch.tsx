import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import SelectButton from "../../components/Button/SelectButton";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { useRef, useState } from "react";

const HireSearch = () => {
    const [months, setMonths] = useState<number[]>([]);
    const [type, setType] = useState<string>("");
    const typeList : string[] = ['concert', 'festival', 'etc'];

    const titleRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleMonth = (month: number) => {
        if(months.includes(month))  setMonths([...months.filter((el)=>el!=month)]);
        else                        setMonths([...months, month]);
    }

    const handleSearch = () => {
        const searchTitle = titleRef.current?.value || "";
        const searchType = type;
        const searchMonth = months;

        navigate("/part/search/result");
    }
    
    return (
        <div className="w-[375px] h-[812px] overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="행사 검색" />
            <div className="w-[331px] h-full">
                <div className="w-[330px] h-[580px] overflow-hidden border-t border-b">
                    <p className="w-[330px] h-[45px] text-xl font-bold text-left text-white">
                        행사 이름
                    </p>
                    <input type="text" ref={titleRef} className="w-[330px] h-10 bg-background-light/30 rounded-lg shrink-0 mb-2" />
                    <div className="w-[330px] h-full overflow-hidden flex flex-col">
                        <div className="w-[331px] h-[324px] overflow-hidden flex flex-shrink-0 border-y">
                            <div className="w-[60px] h-[324px] overflow-hidden border-r flex flex-shrink-0 justify-center itmes-center">
                                <p className="text-[15px] font-bold text-center text-white">
                                    행사 기간
                                </p>
                            </div>
                            <div className="w-full h-[324px] overflow-hidden">
                                <div className="w-[270px] h-14 overflow-hidden border-b flex justify-center items-center text-xl font-bold text-white">
                                    2023
                                </div>
                                <div className="w-[270px] h-[268px] overflow-hidden flex flex-col gap-8 px-5 py-7">
                                    <div className="w-full flex justify-between">
                                        <SelectButton state={months.includes(1)} title={"1월"} func={() => { handleMonth(1) }} />
                                        <SelectButton state={months.includes(2)} title={"2월"} func={() => { handleMonth(2)}} />
                                        <SelectButton state={months.includes(3)} title={"3월"} func={() => { handleMonth(3)}} />
                                    </div>
                                    <div className="w-full flex justify-between">
                                        <SelectButton state={months.includes(4)} title={"4월"} func={() => { handleMonth(4)}} />
                                        <SelectButton state={months.includes(5)} title={"5월"} func={() => { handleMonth(5)}} />
                                        <SelectButton state={months.includes(6)} title={"6월"} func={() => { handleMonth(6)}} />
                                    </div>
                                    <div className="w-full flex justify-between">
                                        <SelectButton state={months.includes(7)} title={"7월"} func={() => { handleMonth(7)}} />
                                        <SelectButton state={months.includes(8)} title={"8월"} func={() => { handleMonth(8)}} />
                                        <SelectButton state={months.includes(9)} title={"9월"} func={() => { handleMonth(9)}} />
                                    </div>
                                    <div className="w-full flex justify-between">
                                        <SelectButton state={months.includes(10)} title={"10월"} func={() => { handleMonth(10)}} />
                                        <SelectButton state={months.includes(11)} title={"11월"} func={() => { handleMonth(11)}} />
                                        <SelectButton state={months.includes(12)} title={"12월"} func={() => { handleMonth(12)}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[330px] h-[60px] overflow-hidden flex border-b flex-shrink-0">
                            <div className="w-[60px] h-[60px] overflow-hidden border-r flex flex-shrink-0 justify-center items-center text-[15px] font-bold text-center text-white">
                                행사<br />종류
                            </div>
                            <div className="w-full h-[60px] overflow-hidden flex justify-between items-center px-4">
                                {typeList.map((v,i)=>(<SelectButton key={i} state={type===v} title={v} func={() => { setType(v)}} />))}
                            </div>
                        </div>
                        <div className="w-full h-[100px] flex justify-center items-center">
                            <Button title="Search" type="default" func={() => { handleSearch() }} />
                        </div>
                    </div>
                </div>
            </div>
            <NavBar role="member" state="1" />
        </div>
    )
}

export default HireSearch;