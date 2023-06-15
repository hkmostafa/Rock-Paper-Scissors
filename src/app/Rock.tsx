import IconRock from "../../public/images/icon-rock.svg";
import Image from "next/image";

const Rock = () => {
  return (
    <div className="flex aspect-square w-full justify-center rounded-full bg-white px-6 py-6 align-middle ">
      <Image
        src={IconRock}
        alt="paper icon"
        className="w-[80%] self-center"
      ></Image>
    </div>
  );
};
export default Rock;
