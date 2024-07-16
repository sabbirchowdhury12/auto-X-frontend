import Container from '@/components/container';
import BookingPage from './booking';
import Heading from './heading';

const BookingSection = () => {
  return (
    <section
      className="relative  bg-fixed bg-cover bg-center bg-no-repeat py-10 md:py-32  "
      style={{
        backgroundImage: `url(https://duruthemes.com/demo/html/renax/light/img/slider/3.jpg)`,
      }}
    >
      <div className="absolute bottom-0 left-0 inset-0 bg-black opacity-50 w-full "></div>

      <div className="container ">
        <Heading title="rent now" sub_title="book a car" color="white" />

        <Container>
          <BookingPage />
        </Container>
      </div>
    </section>
  );
};

export default BookingSection;
