import { useEffect, useRef, useState } from "react";
import { RegionDetailList, RegionList } from "../../interface/Event";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import Modal from "./Modal";
import { CgSpinner } from "react-icons/cg";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";


interface props {
    onSelect: Function;
}

const SelectPlaceModal = ({ onSelect }: props) => {
    const regionRef = useRef<HTMLSelectElement>(null);
    const [region, setRegion] = useState({ id: "11", content: "서울특별시" });
    const [regionContent, setRegionContent] = useState("");
    const [ckk, setCkk] = useState("");
    const [placeList, setPlaceList] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.target.value;
        const initCkk = RegionDetailList.filter((ckk) => ckk.id.slice(0, 2) === id)[0].id;
        setRegion(RegionList.filter((region) => region.id === id)[0]);
        setCkk(initCkk)
        console.log(RegionList.filter((region) => region.id === id)[0])
        setPage(1);
        handlePlaceList(initCkk);
    }

    const handleCkk = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCkk(e.target.value);
        setPage(1);
        handlePlaceList(e.target?.value);
    }

    const handlePlaceList = (ckk:string) => {
        setLoading(true);
        axios.get(`https://www.kopis.or.kr/openApi/restful/prfplc?service=11653933ac2447da843868e7cb625bdb&cpage=${page}&rows=7&signgucodesub=${ckk}`)
            .then((res) => {
                console.log(res.data);
                const parser = new XMLParser();
                const data = parser.parse(res.data);
                console.log(data);
                setPlaceList(data.dbs?.db || []);
                setLoading(false);
            }).catch((err: Error) => {
                alert(err);
            });
    }

    const handleReducePage = () => {
        if (page > 1) setPage(page - 1);
    }

    const handleAddPage = () => {
        setPage(page + 1);
    }

    const handleSelect = (place: any) => {
        onSelect(place);
    }

    useEffect(() => {
        handlePlaceList(ckk);
    }, [page])

    useEffect(() => {
        const init = RegionDetailList.filter((ckk) => ckk.id.slice(0, 2) === region.id);
        setCkk(init[0].id);
    }, [region]);

    return (
        <Modal>
            <div className="w-[290px] h-full flex flex-col justify-start place-items-center gap-2">
                <div className="w-full h-[50px] border-b border-white flex mt-10 text-2xl">
                    <p className="w-[150px] h-full text-place-center">시/도</p>
                    <select
                        ref={regionRef}
                        className="w-full h-full text-place-center bg-bg-100 outline-none"
                        onChange={handleRegion}
                    >
                        {RegionList?.map((region, i) => (
                            <option key={i} value={region.id}>{region.content}</option>
                        ))}
                    </select>
                </div>
                <div className="w-full h-[50px] border-b border-white flex text-2xl">
                    <p className="w-[150px] h-full text-place-center ">시/군/구</p>
                    <select
                        ref={regionRef}
                        value={ckk}
                        className="w-full h-full text-place-center bg-bg-100 outline-none"
                        onChange={handleCkk}
                    >
                        {RegionDetailList.filter((ckk) => ckk.id.slice(0, 2) === region.id)?.map((ckk, i) => (
                            <option key={i} value={ckk.id}>
                                {ckk.content.replace(region.content, "") || "전체"}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="w-full h-[350px] bg-bg-100 flex flex-col rounded-xl">
                    {loading
                        ?
                        <CgSpinner className="animate-spin self-center"/>
                        :
                        <>
                            {placeList.length>0&&placeList?.map((place: any, i) => (
                                <div
                                    key={i}
                                    className="w-full h-[70px] text-lg"
                                    onClick={() => { onSelect({ id: place.mt10id, content:place.fcltynm }) }}
                                >
                                    {place.fcltynm}
                                </div>
                            ))}
                            <div
                                id="pagenation"
                                className="w-full h-fit flex justify-center gap-5"
                            >
                                <BiLeftArrow onClick={handleReducePage} />
                                {page}
                                <BiRightArrow onClick={handleAddPage} />
                            </div>
                        </>
                    }
                </div>
            </div>
        </Modal>
    )
};

export default SelectPlaceModal;