import { Button } from '@/components/ui/button';
import Heading from './heading';
import { MoveUpRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section
      className="relative  bg-fixed bg-cover bg-center bg-no-repeat py-32 "
      style={{
        backgroundImage: `url(https://duruthemes.com/demo/html/renax/light/img/slider/3.jpg)`,
      }}
    >
      <div className="absolute bottom-0 left-0 inset-0 bg-black opacity-50 w-full "></div>
      <div className="container text-white text-center ">
        <Heading
          title="Rent Your Car"
          sub_title="Interested in Renting? Don`t hesitate and send us a message."
          color="white"
        />

        <div className="mt-4 md:mt-10 flex  items-center text-center justify-center">
          <Button>
            Veiw Deatails <MoveUpRight size={14} className="ml-2" />
          </Button>
          <Button variant={'defaultOutline'} className="ml-4">
            Rent Now <MoveUpRight size={14} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
