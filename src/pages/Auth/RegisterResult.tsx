import RegisterHeader from "../../components/Header/RegisterHeader";
import Templete from "../Templete";
import Content from "../Templete/Content";
import logo_origin_dark from "../../img/logo_origin_dark.png";
import team_logo from "../../img/team_logo.png";
import Button from "../../components/Button/Button";

const RegisterResult = () => {
    return (
        <Templete>
            <div className=" box-content w-fit h-fit flex flex-col md:bg-background-dark p-10 rounded-3xl items-center gap-5">
				<img src={logo_origin_dark} />
				<div className="w-[292px] h-[106px] ">
					
				</div>
				<Button title="Login" type="default" func={()=>{}} />
			</div>
			<img src={team_logo} className="absolute bottom-32" />
        </Templete>
    )
};

export default RegisterResult;