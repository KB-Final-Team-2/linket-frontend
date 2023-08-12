import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import Content from "../Templete/Content";
import { User } from "../../interface/User";
import { Hire } from "../../interface/Hire";
import { useEffect, useState } from "react";

import { collection } from "firebase/firestore";
import { _db, db } from "../../firebase";
import Button from "../../components/Button/Button";
import { ChatProps } from "../../interface/props";
import MessageList from "../../components/List/MessageList";
import { CgSpinner } from "react-icons/cg";

const HireChat = () => {
    const [message, setMessage] = useState<string>("");
    const [chatId, setChatId] = useState<string>("");
    const [chatList, setChatList] = useState<ChatProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const user: User = useSelector((state: any) => state.auth.data);
    const hire = useSelector((state: any) => state.hire);
    const hireData: Hire = hire?.data;

    useEffect(() => {
        setIsLoading(true)
        const unsubscribe = _db.onSnapshot(_db.query(collection(db, "chat"), _db.where("hireId", "==", hireData?.hireId)), (snapshot) => {
            snapshot.docs.forEach((doc) => {
                console.log(doc.id);
                console.log(doc.data());
                setChatId(doc.id);
                setChatList(doc.data().chat);
            })
            setIsLoading(false);
        })

        return () => { unsubscribe() };
    }, [hireData])

    const handleSubmit = () => {
        const currChat: ChatProps = { email: user.email, message };
        const ref = _db.doc(db, "chat", chatId!);

        _db.updateDoc(ref, {
            chat: _db.arrayUnion(currChat)
        }).then((res: any) => {
            setMessage("");
        });
    }

    return (
        <Templete>
            <Header title="채팅" />
            <Content>
                <div className={`w-full h-full flex flex-col gap-2 overflow-auto custom-toolbar ${isLoading&&"text-place-center"}`}>
                    {isLoading
                        ?
                        <CgSpinner className="animate-spin" />
                        :
                        chatList?.map((chat, i) => (
                            <MessageList key={i} email={chat.email} message={chat.message} />
                        ))}
                </div>
                <div className="w-full h-20 flex justify-start items-center gap-2">
                    <input className="w-full rounded-lg px-2 py-1" value={message} onChange={(e) => { setMessage(e.target.value) }} />
                    <Button title="send" type={message === "" ? "unable" : "default"} func={() => { handleSubmit() }} />
                </div>
            </Content>
            <NavBar state={"1"} role={"staff"} />
        </Templete>
    )
};

export default HireChat;