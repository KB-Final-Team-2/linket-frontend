import { FuncListProps } from "../../interface/props";
import TicketBackground from "../../img/ticket2.png"
import Barcode from "react-barcode";
import { TicketWithEvent } from "../../interface/Ticket";
import { useDispatch } from "react-redux";
import { getTicket, setTicket } from "../../redux/slice/ticketSlice";

interface props {
    ticket: TicketWithEvent;
}

const TicketList = ({ ticket }: props) => {
    const dispatch: any = useDispatch();

    return (
        <div
            className="w-full h-20 overflow-hidden cursor-pointer flex-shrink-0 flex justify-start items-center"
            style={{
                background: `url(${TicketBackground})`
            }}
            // onClick={() => { dispatch(getTicket(ticket.ticketId)) }}
            onClick={() => { dispatch(setTicket(ticket)) }}
        >
            <div className="w-[60px] h-[30px] rotate-90 overflow-hidden flex place-content-center flex-shrink-0">
                <Barcode value={ticket.serialNum} width={1} height={40} background="none" displayValue={false} margin={0} />
            </div>
            <div className="w-full text-[30px] flex flex-col flex-grow-0 px-4">
                <div className="w-full h-full font-bold text-[#ffa559] truncate flex justify-start items-center">
                    {ticket.eventName}
                </div>
                <div className="w-full h-full font-bold text-base text-[#d9d9d9] flex justify-start items-center">
                    {ticket.startDate}~{ticket.endDate}
                </div>
            </div>
        </div>
    )
};

export default TicketList;