"use client";
import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.svg";

//Result types
type Result = "YOU WIN" | "YOU LOSE" | "A DRAW";
const ChosePaper = () => {
  return (
    <div className="grid justify-items-center gap-5">
      <h2 className="font-Barlow600 text-2xl tracking-wider text-white">
        YOU PICKED
      </h2>
      <div className=" aspect-square w-full rounded-full bg-gradient-to-b  from-PaperFrom to-PaperTo p-5">
        <Paper />
      </div>
    </div>
  );
};
const ChoseRock = () => {
  return (
    <div className="grid justify-items-center gap-5">
      <h2 className="font-Barlow600 text-2xl tracking-wider text-white">
        YOU PICKED
      </h2>
      <div className=" aspect-square h-full w-full rounded-full bg-gradient-to-b from-RockFrom to-RockTo p-5 ">
        <Rock />
      </div>
    </div>
  );
};
const ChoseScissors = () => {
  return (
    <div className="grid justify-items-center gap-5">
      <h2 className="font-Barlow600 text-2xl tracking-wider text-white">
        YOU PICKED
      </h2>
      <div className="aspect-square h-full w-full rounded-full bg-gradient-to-b  from-ScissorsFrom to-ScissorsTo p-5">
        <Scissors />
      </div>
    </div>
  );
};

const Choices = (props: any) => {
  return (
    <div className="relative z-0 grid grid-cols-2 gap-16 place-self-center  self-start">
      <Image
        src="/images/bg-triangle.svg"
        alt=""
        width={260}
        height={260}
        className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform"
      />
      <div
        className="flex items-center justify-center transition-transform hover:scale-[1.05] hover:cursor-pointer"
        onClick={() => props.handleClick("Paper")}
      >
        <div className=" aspect-square w-full rounded-full bg-gradient-to-b  from-PaperFrom to-PaperTo p-3">
          <Paper />
        </div>
      </div>
      <div
        className="flex items-center justify-center transition-transform hover:scale-[1.05] hover:cursor-pointer"
        onClick={() => props.handleClick("Scissors")}
      >
        <div className="aspect-square h-full w-full rounded-full bg-gradient-to-b  from-ScissorsFrom to-ScissorsTo p-3 ">
          <Scissors />
        </div>
      </div>

      <div
        className="relative bottom-6 col-span-2 flex items-center justify-center  place-self-center transition-transform hover:scale-[1.05] hover:cursor-pointer"
        onClick={() => props.handleClick("Rock")}
      >
        <div className=" aspect-square h-full w-full rounded-full bg-gradient-to-b from-RockFrom to-RockTo p-3 ">
          <Rock />
        </div>
      </div>
    </div>
  );
};
const Playground = () => {
  const [picked, setPicked] = useState<string | null>(null);
  const [HousePicked, setHousePicked] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [score, setScore] = useState<number>(0);
  const dualResult = (
    picked: string | null,
    housePicked: string | null
  ): Result | null => {
    switch (picked) {
      case "Rock":
        switch (housePicked) {
          case "Rock":
            return "A DRAW";
          case "Paper":
            return "YOU LOSE";

          case "Scissors":
            return "YOU WIN";
        }
      case "Paper":
        switch (housePicked) {
          case "Rock":
            return "YOU WIN";

          case "Paper":
            return "A DRAW";

          case "Scissors":
            return "YOU LOSE";
        }
      case "Scissors":
        switch (housePicked) {
          case "Rock":
            return "YOU LOSE";
          case "Paper":
            return "YOU WIN";
          case "Scissors":
            return "A DRAW";
        }
      default:
        return null;
    }
  };

  const getRandomOption = () => {
    if (HousePicked === null) {
      const options = ["Rock", "Paper", "Scissors"];
      const randomIndex = Math.floor(Math.random() * options.length);
      setHousePicked(options[randomIndex]);
    }
  };

  const handleClick = (componentName: string) => {
    setPicked(componentName);
  };

  const incrementScore = (result: Result | null) => {
    if (result === "YOU WIN") {
      setScore(score + 1);
    }
  };
  const reset = () => {
    setPicked(null);
    setHousePicked(null);
    setResult(null);
  };

  useEffect(() => {
    const delay = 2000;

    const timer = setTimeout(() => {
      getRandomOption();
      const newResult = dualResult(picked, HousePicked);
      setResult(newResult);
    }, delay);

    console.log(HousePicked);
    return () => clearTimeout(timer);
  }, [picked, HousePicked]);

  useEffect(() => {
    incrementScore(result);
  }, [result]);
  return (
    <>
      <div className="flex w-[50vw] place-items-center  justify-between place-self-center rounded-lg border border-White px-5 py-3 ">
        <Image src={logo} alt="Rock Paper Scissors" className="h-max"></Image>

        <div className="grid place-items-center justify-center  rounded-lg bg-White px-10 py-2 ">
          <h2 className="font-Barlow600 text-lg tracking-widest text-blue-900 ">
            SCORE
          </h2>
          <h2 className="justify-center font-Barlow700 text-[4rem] font-bold leading-[4rem] text-gray-700 ">
            {score}
          </h2>
        </div>
      </div>
      {picked && (
        <div
          className={`grid  gap-20 justify-self-center ${
            result ? "grid-cols-3" : "grid-cols-2"
          }`}
        >
          {picked === "Rock" && <ChoseRock />}
          {picked === "Paper" && <ChosePaper />}
          {picked === "Scissors" && <ChoseScissors />}
          {result ? (
            <div className="grid place-items-center items-start gap-6 self-center ">
              <h2 className="font-Barlow700 text-4xl tracking-wider text-white">
                {result}
              </h2>
              <button
                className={`w-fit rounded-lg border bg-white px-14 py-5 font-Barlow600 text-xl leading-3 tracking-wider ${"text-black"} ${
                  result === "YOU LOSE" && "text-red-600"
                } ${result === "YOU WIN" && "text-green-800"}  `}
                onClick={reset}
              >
                PLAY AGAIN
              </button>
            </div>
          ) : null}

          <div className="grid justify-items-center gap-5">
            <h2 className="font-Barlow600 text-2xl tracking-wider text-white">
              THE HOUSE PICKED
            </h2>
            {HousePicked === "Rock" && (
              <div className=" aspect-square h-full w-full rounded-full bg-gradient-to-b from-RockFrom to-RockTo p-5 ">
                <Rock />
              </div>
            )}
            {HousePicked === "Paper" && (
              <div className=" aspect-square w-full rounded-full bg-gradient-to-b  from-PaperFrom to-PaperTo p-5">
                <Paper />
              </div>
            )}
            {HousePicked === "Scissors" && (
              <div className="aspect-square h-full w-full rounded-full bg-gradient-to-b  from-ScissorsFrom to-ScissorsTo p-5">
                <Scissors />
              </div>
            )}
            {HousePicked === null && (
              <div className="aspect-square w-full rounded-full bg-slate-900"></div>
            )}
          </div>
        </div>
      )}

      {picked === "" ||
        (picked === null && <Choices handleClick={handleClick} />)}
    </>
  );
};
export default Playground;
