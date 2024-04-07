import Container from '@/components/container';
import BookingSection from './components/bookingSection';
import ContactSection from './components/contactSection';
import BookingStep from './components/bookingStep';
import DownloadApp from './components/downloadApp';
import Hero from './components/hero';
import TopVehicle from './components/topVehicle';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Container>
        <BookingStep />
      </Container>
      <BookingSection />
      <Container>
        <TopVehicle />
      </Container>
      <ContactSection />
      {/* <VedioSection /> */}
      <Container>
        <DownloadApp />
      </Container>
    </>
  );
};

export default HomePage;
