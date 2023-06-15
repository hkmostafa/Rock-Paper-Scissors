import Image from "next/image";
import Rules from "./Rules";
import Playground from "./Playground";

export default function Home() {
  return (
    <main className="relative grid h-screen  place-items-start  bg-gradient-to-b from-BackgroundColorFrom  to-BackgroundColorTo align-top">
      <Playground />
      <Rules />
    </main>
  );
}
