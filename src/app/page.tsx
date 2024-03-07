import Image from "next/image";
import Social from "./components/social";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-8">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white gray:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <Image
              src="logo.png"
              alt="Malinali Logo"
              width={224}
              height={161}
              priority
            />
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="profile-avatar.png"
          alt="Profile"
          width={180}
          height={37}
          priority
        />
      </div>
      <Social title="Malinali Becerril"></Social>
    </main>
  );
}
