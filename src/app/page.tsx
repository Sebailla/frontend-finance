import TestComponent from "@/components/TestComponent";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <header className="header  "></header>
      <main className="flex flex-col items-center justify-center min-h-screen">

        <Image
          src={'/logo.svg'}
          width={200}
          height={200}
          alt="logo"
        />

        <TestComponent />

      </main>
    </>

  );
}
