import Container from '@/components/container';
import BookingForm from './components/bookingForm';
import ContactSection from './components/bookingSection';
import BookingStep from './components/bookingStep';
import DownloadApp from './components/downloadApp';
import Hero from './components/hero';
import TopVehicle from './components/topVehicle';
import VedioSection from './components/vedioSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Container>
        <BookingStep />
      </Container>

      <BookingForm />

      <Container>
        <TopVehicle />
      </Container>
      <ContactSection />
      <VedioSection />
      <Container>
        <DownloadApp />
      </Container>
    </>
  );
};

export default HomePage;
