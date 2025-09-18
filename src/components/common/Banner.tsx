import Button from "@/components/ui/Button";
import Image from "next/image";
import BannerImage from "@/assets/images/banner-image.png";

const Banner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8 md:py-4 px-6 rounded-lg shadow-lg">
      <div className="w-full px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-2xl mb-4">
            Hello, <span className="font-bold">name</span>
          </h1>
          <p className="text-md mb-6 md:w-3/5">
            Take control of your store and manage sales, inventory, and
            customers effortlessly. Keep everything running smoothly and make
            smarter business decisions with all the tools you need in one place.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => {}}
              className="bg-white text-purple-600 font-semibold px-4 py-2 !rounded-full text-sm"
            >
              Manage Business
            </Button>
          </div>
        </div>
        <Image
          width={230}
          height={200}
          src={BannerImage}
          alt="Business Illustration"
          className="hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Banner;
