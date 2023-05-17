

interface props {
    title: string,
    func: Function,
}

const Ticket = (props : props) => {
    return(
        <div
            className="w-[330px] h-20 overflow-hidden border-[5px] border-[#ffa559]"
            onClick={()=>{props.func()}}    
        >
            <p className="text-[40px] font-bold text-center text-[#ffa559]">
                {props.title}
            </p>
        </div>
    )
};

export default Ticket;