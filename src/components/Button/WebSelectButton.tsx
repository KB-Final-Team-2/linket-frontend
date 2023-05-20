interface props {
    title: string;
    state: boolean;
    func: Function;
}

const WebSelectButton = ({ title, state, func }: props) => {
    return (
        <div
            className={`
                w-[80px] h-[40px] overflow-hidden rounded-[15px] border-4 border-primary text-lg font-bold text-center text-white flex justify-center items-center cursor-pointer
                ${state?"bg-primary":"bg-black/25 hover:bg-white/25"}
            `}
            onClick={()=>{func()}}
        >
                {title}
        </div>
    )
}

export default WebSelectButton;