import Darkmode from "@/components/Darkmode";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <header className="fixed font-bold w-full backdrop-blur-sm text-black dark:text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center mb-4 md:mb-0"
          >
            <Image
              src="/iei-light.png"
              alt="logo"
              width={500}
              height={500}
              className="w-10"
            ></Image>

            <span className="ml-3 text-xl font-bold">IEI - SCEM</span>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href="#team"
              className="mr-10 hover:underline underline-offset-4"
            >
              Team
            </Link>
            <Link
              href="#events"
              className="mr-10 hover:underline underline-offset-4"
            >
              Events
            </Link>
            <Link
              href="#gallery"
              className="mr-10 hover:underline underline-offset-4"
            >
              Gallery
            </Link>
          </nav>
          {/* <Darkmode /> */}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
