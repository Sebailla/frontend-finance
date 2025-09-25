import TestComponent from "@/components/test/TestComponent";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <header className="header  "></header>
      <main className="flex flex-col items-center justify-center min-h-screen">

        <TestComponent />

      </main>
    </>

  );
}
