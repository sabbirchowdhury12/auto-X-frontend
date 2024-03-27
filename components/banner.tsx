import { Button } from './ui/button';

const Banner = () => {
  return (
    <div
      className="  bg-cover bg-center bg-no-repeat py-32  h-1/2"
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
      <div className="container text-white text-center ">
        <h6>Rent Your Car</h6>
        <h5>Interested in Renting?</h5>
        <p>Don`t hesitate and send us a message.</p>
        <Button>WhatsApp</Button>
        <Button>
          Contact Us <span className="ti-arrow-top-right"></span>
        </Button>
      </div>
    </div>
  );
};

export default Banner;
