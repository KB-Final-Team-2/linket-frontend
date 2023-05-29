interface props {
    state: boolean,
    title: string,
    func: Function
}

const SelectButton = (props: props) => {
    return(
        <div
            className={`
                w-fit h-[30px] overflow-hidden rounded-[15px] text-lg
                text-white font-bold flex justify-center items-center
                border-4 border-primary px-3 cursor-pointer
                ${props.state ? "bg-primary" : "bg-black/50"}
            `}
            onClick={()=>props.func()}
        >
            {props.title}
        </div>
    )
}

export default SelectButton;