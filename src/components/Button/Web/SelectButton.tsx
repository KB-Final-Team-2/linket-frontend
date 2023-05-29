interface props {
    state: boolean,
    title: string,
    func: Function
}

const SelectButton = (props: props) => {
    return(
        <div
            className={`
                w-[70px] h-[30px] left-[120px] top-1 overflow-hidden rounded-[15px] 
                text-black font-bold flex justify-center items-center
                ${props.state ? "bg-[#f1d1a0]" : "bg-primary-200"}
            `}
            onClick={()=>props.func()}
        >
            {props.title}
        </div>
    )
}

export default SelectButton;