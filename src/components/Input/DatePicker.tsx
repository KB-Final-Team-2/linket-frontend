import { forwardRef } from "react";
import ReactDatePicker from "react-datepicker";

interface props {
    title: string;
    date: Date | null;
    setDate: Function
}

const DatePicker = forwardRef(({date, setDate}:props,ref)=>{
return(<ReactDatePicker
    selected={date}
    onChange={((date) => { setDate(date!) })}
    dateFormat={'yyyy.MM.dd'}
    shouldCloseOnSelect
    className="w-full h-full p-2 text-white text-lg bg-white/20 rounded-lg outline-none z-50 flex"
/>)
})

export default DatePicker;