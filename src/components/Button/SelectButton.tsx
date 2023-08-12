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
                px-3 cursor-pointer transition-all noselect
                ${props.state ? "bg-primary-100" : "bg-black/50"}
            `}
            onClick={()=>props.func()}
        >
            {props.title}
        </div>
    )
}

export default SelectButton;