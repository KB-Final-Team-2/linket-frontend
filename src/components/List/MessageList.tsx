import { useSelector } from "react-redux";
import { ChatProps } from "../../interface/props";
import { User } from "../../interface/User";

const MessageList = ({ email, message }: ChatProps) => {
    const user: User = useSelector((state: any) => state.auth?.data);
    return (
        <div className={`w-full h-fit flex ${user.email===email?"justify-end":"justify-start"} items-center`}>
            <div className={`w-fit max-w-[80%] h-fit flex flex-col justify-start items-start px-4 py-2 box-content ${user.email===email?" bg-primary-200":" bg-accent-200"} rounded-2xl shadow-md`}>
                <p className={`text-sm text-white`}>{email}</p>
                <p className={`text-base text-left text-black`}>{message}</p>
            </div>
        </div>
    )
};

export default MessageList;