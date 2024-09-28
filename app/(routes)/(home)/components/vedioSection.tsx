import Heading from './heading';

const VedioSection = () => {
  return (
    <section className=" h-screen  w-full flex items-center justify-center">
      <div className="relative h-4/5 w-full flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://i.imgur.com/sOtZX1j.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 text-center text-white">
          {/* <h1 className="text-4xl font-bold mb-4">Enjoy Your Trip</h1>
          <p className="text-lg">Go For a Long Drive</p> */}
          <Heading
            title="Enjoy Your Trip"
            sub_title="Go For a Long Drive"
            color="white"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
      </div>
    </section>
  );
};

export default VedioSection;
