import { BsInfoLg } from "react-icons/bs";

const SecondCard = (props: any) => {
  return (
    <div className="w-full mt-5">
      <div className="second-card-gradient mx-5 rounded-2xl pt-4 px-5 bg-red-500 min-h-36 top-card-gradient flex flex-col">
        <div className="flex w-full justify-between ">
          <span className="flex  text-gray-300 drop-shadow-md text-center ">
            {props.text1}
          </span>
          <span className="flex text-gray-300 drop-shadow-md text-center ">
            {props.text2}
          </span>
        </div>
        <span className="text-xl text-white font-bold">{props.text3}</span>
        <div className="flex w-full h-full justify-center gap-4 mb-5 mt-1">
          <button className="bg-white text-[#201926] font-bold rounded-lg px-5 py-1 w-full h-14">
            {props.text4}
          </button>
          <button className="flex border-gray-500 border-4 text-white rounded-lg min-w-16 justify-center items-center">
            <BsInfoLg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
