import { ko } from "date-fns/esm/locale"
import { forwardRef } from "react"
import ReactDatePicker from "react-datepicker"

interface props {
    title: string;
    date: Date | null;
    setDate: Function
}

const DatePicker = forwardRef(({ date, setDate }: props, ref) => {
    return (
        <ReactDatePicker
            locale={ko}
            selected={date}
            onChange={((date:Date) => { setDate(date!) })}
            dateFormat={'yyyy.MM.dd'}
            shouldCloseOnSelect
            className="w-full h-full border-none font-bold text-lg text-center py-2 bg-black/20 outline-none focus:bg-white/20"
        />
    )
})