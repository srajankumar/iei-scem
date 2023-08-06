import Background from "@/components/Background";
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  return (
    <div>
      <Background />
      <div className="fixed px-5 font-poppins backdrop-blur-lg py-5 w-full">
        <Link href="/">Back</Link>
      </div>
      <div className="pt-20 pb-10 px-5 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/assets/gallery/img1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/assets/gallery/img3.jpg"
              alt=""
            />
          </div>{" "}
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/assets/gallery/img6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/assets/gallery/img2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/assets/gallery/img5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
