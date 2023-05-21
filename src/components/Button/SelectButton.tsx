interface props {
    state: boolean,
    title: string,
    func: Function
}

const SelectButton = (props: props) => {
    return(
        <div
            className={`
                w-[70px] h-[30px] overflow-hidden rounded-[15px] text-lg
                text-black font-bold flex justify-center items-center
                ${props.state ? "bg-[#f1d1a0]" : "bg-secondary"}
            `}
            onClick={()=>props.func()}
        >
            {props.title}
        </div>
    )
}

export default SelectButton;