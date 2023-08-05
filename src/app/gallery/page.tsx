import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  return (
    <div className="md:pt-20 pt-24 px-5 pb-5">
      <div className="absolute top-0 z-50">
        <div className=" bg-white font-poppins py-5 md:py-6 w-full">
          <Link href="/">Back</Link>
        </div>
        <div className="grid bg-white grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src=""
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src=""
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src=""
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src=""
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src=""
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src=""
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src=""
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src=""
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src=""
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src=""
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src=""
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src=""
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
