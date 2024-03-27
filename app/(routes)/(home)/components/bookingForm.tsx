import Container from '@/components/container';
import BookingPage from './booking';

const BookingForm = () => {
  return (
    <section
      className="relative  bg-fixed bg-cover bg-center bg-no-repeat py-32  "
      style={{
        backgroundImage: `url(https://duruthemes.com/demo/html/renax/light/img/slider/3.jpg)`,
      }}
    >
      <div className="absolute bottom-0 left-0 inset-0 bg-black opacity-50 w-full "></div>

      <div className="container ">
        <p className="text-center text-white font-bold">RENT NOW</p>
        <h2 className="text-center text-white text-3xl font-bold my-4">
          BOOK A CAR
        </h2>
        <Container>
          <BookingPage />
        </Container>
      </div>
    </section>
  );
};

export default BookingForm;
