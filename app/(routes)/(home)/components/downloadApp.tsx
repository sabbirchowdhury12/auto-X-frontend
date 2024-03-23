import mobileImage from '@/assets/download-image.png';
import CustomImage from '@/components/customImage';
import AppStoreIcon from '@/components/icons/appleStore';
import PlayStoreIcon from '@/components/icons/playStore';

const DownloadApp = () => {
  return (
    <section className="relative flex flex-col-reverse md:grid grid-cols-2 justify-between items-center overflow-hidden py-12 md:py-28 lg:py-40 px-4 md:px-10 lg:px-16 ">
      <div className="px-10 space-y-6">
        <h1 className="text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-extrabold">
          Download our App to get most out of it
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit non quo
          ullam alias error aspernatur molestias aut quam quis architecto
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <div className="flex gap-2 justify-center items-center p-2 h-14 rounded-md bg-black text-white cursor-pointer shadow-lg hover:opacity-90">
            <PlayStoreIcon className="w-8 md:w-6 lg:w-8 h-8 md:h-6 lg:h-8" />
            <div>
              <h3 className="uppercase text-[8px] lg:text-[10px]">Get it on</h3>
              <h1 className="text-sm md:text-md lg:text-lg font-semibold leading-tight">
                Google Play
              </h1>
            </div>
          </div>

          <div className="flex gap-2 justify-center items-center p-2 h-14 rounded-md bg-black text-white cursor-pointer shadow-lg hover:opacity-90">
            <AppStoreIcon className="w-8 md:w-6 lg:w-8 h-8 md:h-6 lg:h-8" />
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
      <div className="mb-6 md:mb-0 md:absolute md:bottom-[-10%] md:right-[11%]">
        <CustomImage
          src={mobileImage}
          alt="download mobile image"
          className=" w-full md:w-72"
        />
      </div>
    </section>
  );
};

export default DownloadApp;
