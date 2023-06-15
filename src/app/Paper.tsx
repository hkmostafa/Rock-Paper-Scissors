import Image from "next/image";
import IconPaper from "../../public/images/icon-paper.svg";

const Paper = () => {
  return (
    <div className="flex aspect-square w-full justify-center rounded-full bg-white px-6 py-5 align-middle">
      <Image
        src={IconPaper}
        alt="paper icon"
        className="w-[70%] self-center"
      ></Image>
    </div>
  );
};
export default Paper;
