interface props {
    title: string,
    type: string | undefined,
    func: Function
}

const Button = (props: props) => {
    return (
        <div
            className={`
                w-20 h-10 left-[148px] top-5 overflow-hidden rounded-[15px] ${props.type!="delete" ? "bg-secondary/80 hover:bg-secondary" : "bg-red-600 hover:bg-red-500"}
                text-[15px] font-bold text-black flex justify-center items-center cursor-pointer
            `}
            onClick={()=>{props.func()}}
        >
            {props.title}
        </div>
    )
}

export default Button;