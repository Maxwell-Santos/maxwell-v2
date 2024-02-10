import Image from "next/image";
import { ChangeProject } from "./components/ChangeProject";

export default function Home() {
  return (
    <>
      <div className="flex-1 w-full flex justify-center items-center max-w-[1000px] max-h-screen sticky top-0 right-0">
        <Image
          alt="mockup"
          src={"/mockups/ds-inside.png"}
          objectFit="cover"
          width={800}
          height={900}
          className="rounded-lg"
        />
      </div>
      <ChangeProject />
    </>
  );
}
