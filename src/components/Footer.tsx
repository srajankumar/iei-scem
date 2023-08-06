import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 shadow-2xl backdrop-blur-md body-font">
        <div className="w-full md:px-10 py-5 flex md:items-center md:flex-row flex-col">
          <div className="md:w-auto w-full">
            <Image
              src="/assets/scem-logo.png"
              alt="logo"
              width={500}
              height={500}
              className="w-full md:flex hidden"
            ></Image>
          </div>
          <div className="lg:pl-10 w-full py-5 md:py-0  md:justify-start justify-center flex">
            <div className="flex title-font font-medium items-center text-gray-900">
              <Image
                src="/assets/iei-logo.png"
                alt="logo"
                width={500}
                height={500}
                className="w-10"
              ></Image>
              <div className="ml-3">
                <span className="text-xl">IEI Student Chapter</span>
                <p className="text-sm text-gray-500">
                  Department of Computer Science & Engineering
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full md:px-0 px-10 items-center justify-between">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={500}
              height={500}
              className="w-1/5 md:hidden"
            ></Image>
            <div className="flex flex-col ml-5">
              <h2 className="title-font font-poppins font-medium text-gray-900 tracking-widest mb-1">
                Contact
              </h2>
              <nav className="list-none">
                <li>
                  <Link
                    href="mailto:ieisahyadricse@gmail.com"
                    target="_blank"
                    className="text-gray-600 hover:underline underline-offset-4 hover:text-gray-800"
                  >
                    ieisahyadricse@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:harisha.cs@sahyadri.edu.in"
                    target="_blank"
                    className="text-gray-600 hover:underline underline-offset-4 hover:text-gray-800"
                  >
                    harisha.cs@sahyadri.edu.in
                  </Link>
                </li>
              </nav>
            </div>
            <div className="md:flex hidden flex-col mx-5">
              <h2 className="title-font font-poppins font-medium text-gray-900 tracking-widest mb-1">
                Follow us on
              </h2>
              <nav className="list-none">
                <li>
                  <Link
                    href="https://www.linkedin.com/company/iei-cse-sahyadri-student-chapter/"
                    target="_blank"
                    className="flex hover:underline underline-offset-4 justify-between pr-3 text-gray-800 hover:text-black transition duration-300"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/ieicsechapterscem/"
                    className="flex hover:underline underline-offset-4 justify-between pr-3 text-gray-800 hover:text-black transition duration-300"
                  >
                    Instagram
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="shadow-2xl px-5">
          <div className=" mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2023 Sahyadri College of Engineering and Management | Managed by
              -
              <Link
                href="https://github.com/srajankumar"
                className="text-gray-600 transition duration-300 ml-1 hover:text-black"
                rel="noopener noreferrer"
                target="_blank"
              >
                @srajankumar
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
