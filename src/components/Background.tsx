import Image from "next/image";
const Background = () => {
  return (
    <div>
      <div className="fixed opacity-30 bottom-0 right-0 -z-10">
        <Image
          src="/assets/logo.png"
          alt="logo"
          className="w-full"
          width={500}
          height={500}
        ></Image>
      </div>
      <div className="fixed opacity-50 -z-30">
        <Image
          src="/assets/blob.svg"
          alt="background"
          className="fixed object-cover w-full h-full"
          width={500}
          height={500}
        ></Image>
      </div>
    </div>
  );
};

export default Background;
