interface Info {
    title: string;
    content: string;
}

const WebEventInfoList = ({ title, content }: Info) => {
    return (
        <div className="w-[790px] h-[70px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white flex flex-shrink-0 flex-grow-0">
            <div className="w-[200px] h-[70px] overflow-hidden flex justify-center items-center">
                <p className="text-2xl font-bold text-center text-white">
                    {title}
                </p>
            </div>
            <div className="w-[590px] h-[70px] overflow-hidden flex justify-center items-center">
                <p className="text-2xl font-bold text-center text-white">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default WebEventInfoList;