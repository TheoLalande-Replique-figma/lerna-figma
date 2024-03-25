import logo_lerna from "../../../public/assets/svg/logo_lerna.svg";
import burger_menu from "../../../public/assets/svg/burger_menu.svg";
import question_mark from "../../../public/assets/svg/question_mark.svg";
import Image from "next/image";
import CatPicker from "./CatPicker";

const NavBar = () => {
  return (
    <div className="flex flex-col h-32 w-full">
      <div className="flex h-1/2 bg-white">
        <div className="flex w-full items-center mx-5">
          <div className="w-1/3 flex justify-start">
            <Image src={burger_menu} alt="React Logo" />
          </div>
          <div className="w-1/3 flex justify-center">
            <Image src={logo_lerna} alt="React Logo" />
          </div>
          <div className="w-1/3 flex justify-end">
            <Image src={question_mark} alt="React Logo" />
          </div>
        </div>
      </div>
      <div className="flex h-1/2">
        <CatPicker />
      </div>
    </div>
  );
};

export default NavBar;
