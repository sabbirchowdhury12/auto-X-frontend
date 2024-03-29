import mobileImage from '@/assets/download-image.png';
import CustomImage from '@/components/customImage';
import { Apple, Play } from 'lucide-react';

const DownloadApp = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row  justify-between items-center overflow-hidden ">
      <div className=" space-y-6">
        <h1 className="text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-extrabold text-secondary">
          Download our App to get most out of it
        </h1>
        <p className="text-sm text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit non quo
          ullam alias error aspernatur molestias aut quam quis architecto
        </p>
        <div className="flex justify-center md:justify-start gap-4 ">
          <div className="flex gap-2 justify-center items-center p-2 h-14 rounded-md bg-primary  cursor-pointer shadow-lg hover:opacity-90">
            <Play />
            <div>
              <h3 className="uppercase text-[8px] lg:text-[10px]">Get it on</h3>
              <h1 className="text-sm md:text-md lg:text-lg font-semibold leading-tight">
                Google Play
              </h1>
            </div>
          </div>

          <div className="flex gap-2 justify-center items-center p-2 h-14 rounded-md bg-secondary text-white cursor-pointer shadow-lg hover:opacity-90">
            <Apple />
            <div>
              <h3 className="uppercase text-[8px] lg:text-[10px] ">
                Download on the
              </h3>
              <h1 className="text-sm md:text-md lg:text-lg font-semibold tracking-widest leading-tight">
                Apple Store
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <CustomImage
          src={mobileImage}
          alt="download mobile image"
          className=" w-full md:w-72"
        />
      </div>
      {/* <div className="mb-6 md:mb-0 md:absolute md:bottom-[-10%] md:right-[11%]">
        <CustomImage
          src={mobileImage}
          alt="download mobile image"
          className=" w-full md:w-72"
        />
      </div> */}
    </section>
  );
};

export default DownloadApp;
