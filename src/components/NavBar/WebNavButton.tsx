interface props {
    text: string;
    state: boolean;
    func: Function;
}

const NavButton = ({text, state, func}:props) => {
    return (
        <div
            className={`w-[250px] h-[70px] cursor-pointer overflow-hidden flex flex-shrink-0 items-center justify-center ${state?"bg-primary-100":""}`}
            onClick={()=>{func()}}
        >
            <p className="text-[32px] font-bold text-center text-white">
                {text}
            </p>
        </div>
    )
}

export default NavButton;