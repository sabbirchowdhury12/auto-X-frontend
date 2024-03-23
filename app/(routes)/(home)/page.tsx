import BookingSection from './components/bookingSection';
import BookingStep from './components/bookingStep';
import DownloadApp from './components/downloadApp';
import Hero from './components/hero';
import TopVehicle from './components/topVehicle';
import VedioSection from './components/vedioSection';

const HomePage = () => {
  return (
    <>
      <div className="">
        <Hero />
      </div>

      <BookingStep />
      <TopVehicle />
      <BookingSection />
      <VedioSection />
      <DownloadApp />
    </>
  );
};

export default HomePage;
