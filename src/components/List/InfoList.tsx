interface props {
    title: string,
    children: any,
}


const InfoList = ({ title, children }: props) => {
    return (
        <div
            className="w-full h-fit overflow-hidden border-b border-white flex py-2"
        >
            <div className="w-[50px] flex flex-shrink-0 items-center justify-center text-2xl">
                {children}
            </div>
            <div className="w-full h-full overflow-hidden flex flex-shrink-0 items-center justify-start text-md font-bold text-left text-white px-2">
                {title}
            </div>
        </div>)
}

export default InfoList;