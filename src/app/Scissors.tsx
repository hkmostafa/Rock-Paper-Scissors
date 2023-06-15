import IconScissors from "../../public/images/icon-scissors.svg";
import Image from "next/image";

const Scissors = () => {
  return (
    <div className="align align  flex aspect-square w-full justify-center rounded-full bg-white px-6 py-5">
      <Image
        src={IconScissors}
        alt="paper icon"
        className="w-[80%] self-center"
      ></Image>
    </div>
  );
};
export default Scissors;
