import { Link } from "react-router-dom";
import logoImg from "../../img/logo_icon.png";

const RegisterHeader = () => {
    return (
        <div className="w-full h-[120px] relative overflow-hidden">
            <Link to="/" className="w-full h-fit overflow-hidden flex gap-5 text-place-center">
                <div className="w-[50px] h-[50px]">
                    <img
                        className="w-full h-full"
                        src={logoImg}
                    />
                </div>
                <p className="w-fit h-[50px] text-[35px] font-bold text-left text-white">
                    회원가입
                </p>
            </Link>
        </div>
    )
};

export default RegisterHeader;