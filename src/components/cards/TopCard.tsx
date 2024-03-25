import Image from "next/image";
import main_image from "../../../public/assets/images/main_image.png";
import SecondCard from "./SecondCard";

const TopCard = () => {
  return (
    <div className="w-full mt-10">
      <div className="flex flex-col top-card-gradient bg-red-500 h-[730px] mx-5 rounded-2xl relative justify-center  items-center">
        <Image
          className="absolute -top-8 justify-center"
          src={main_image}
          alt="main_image"
        />
        <h1 className="mt-52 text-white text-3xl font-bold text-center mx-6">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <SecondCard
          text1="Salut"
          text2="Bonsoir"
          text3="350 Euros"
          text4="Cliquez ici"
        />
        <SecondCard
          text1="Bien le bonjour"
          text2="Acab"
          text3="Lorem Ipsum dolor sit amet"
          text4="Cliquez ici"
        />
      </div>
    </div>
  );
};

export default TopCard;
