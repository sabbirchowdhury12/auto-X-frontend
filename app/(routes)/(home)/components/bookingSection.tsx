const BookingSection = () => {
  return (
    <section
      className="relative data-overlay-dark bg-fixed bg-cover bg-center bg-no-repeat py-32"
      style={{
        backgroundImage: `url(https://duruthemes.com/demo/html/renax/light/img/slider/3.jpg)`,
      }}
      data-overlay-dark="5"
    >
      <div className="container text-white z-10">
        <div className="row">
          <div className="col-md-12 text-center">
            <h6>Rent Your Car</h6>
            <h5>Interested in Renting?</h5>
            <p>Dont hesitate and send us a message.</p>
            <a href="tel:+8001234567" className="button-1 mt-15 mb-15 mr-10">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a href="contact.html" className="button-2 mt-15 mb-15">
              Contact Us <span className="ti-arrow-top-right"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
