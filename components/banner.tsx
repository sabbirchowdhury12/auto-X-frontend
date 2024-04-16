import Heading from './heading';

const Banner = () => {
  return (
    <div
      className="  bg-cover bg-center bg-no-repeat py-32  "
      style={{
        backgroundImage: `url(https://duruthemes.com/demo/html/renax/light/img/slider/3.jpg)`,

        // backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        objectFit: 'cover',
        display: 'block',
      }}
    >
      <div className="absolute bottom-0 left-0 inset-0 bg-black opacity-50 w-full "></div>
      <Heading title="reservation" sub_title="Reseve A Car" color="white" />
    </div>
  );
};

export default Banner;
