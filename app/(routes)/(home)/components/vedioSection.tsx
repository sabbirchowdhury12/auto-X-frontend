import Heading from './heading';

const VedioSection = () => {
  return (
    <section className="   w-full flex items-center justify-center">
      <div className="relative  h-[500px] w-full flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover -z-30"
        >
          <source src="https://i.imgur.com/sOtZX1j.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-0 text-center w-full text-white">
          <Heading
            title="Enjoy Your Trip"
            sub_title="Go For a Long Drive"
            color="white"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
      </div>
    </section>
  );
};

export default VedioSection;
