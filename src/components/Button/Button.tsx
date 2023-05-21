interface props {
    title: string,
    type: string | undefined,
    func: Function
}

const Button = (props: props) => {
    return (
        <div
            className={`
                w-20 h-10 left-[148px] top-5 overflow-hidden rounded-[15px]
                ${props.type==="delete" && "bg-red-600 hover:bg-red-500 cursor-pointer"}
                ${props.type==="default" && "bg-secondary/80 hover:bg-secondary cursor-pointer"}
                ${props.type==="unable" && "bg-gray-500 text-gray-200 cursor-not-allowed"}
                text-[15px] font-bold text-black flex justify-center items-center
            `}
            onClick={()=>{props.func()}}
        >
            {props.title}
        </div>
    )
}

export default Button;