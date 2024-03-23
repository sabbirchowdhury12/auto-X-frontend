const Offer = () => {
  const contetnStyle =
    'flex flex-col justify-center items-start gap-2 p-4 w-20 bg-destructive rounded ';
  const bgStyle =
    'h-72 p-10 relative text-white bg-center bg-no-repeat bg-cover';

  return (
    <div>
      <h3 className="text-lg md:text-4xl font-bold mb-6">
        Our car rental offers
      </h3>

      <div className="flex flex-col md:flex-row gap-4 justify-between   ">
        <div
          className={`w-full md:w-1/2 ${bgStyle}`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww')`,
          }}
        >
          <div className={contetnStyle}>
            <span>Up to</span>
            <span className="text-xl font-bold">20%</span>
            Off
          </div>
          <p className="absolute bottom-4 font-bold text-xl ">
            Explore Our Daily Offers
          </p>
        </div>
        <div
          className={` md:flex-1 w-full ${bgStyle}`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww')`,
          }}
        >
          <div className={contetnStyle}>
            <span>Up to</span>
            <span className="text-xl font-bold">30%</span>
            Off
          </div>
          <p className="absolute bottom-4 font-bold text-xl ">
            Explore Our Weekly Offers
          </p>
        </div>
        <div
          className={`md:flex-1  w-full ${bgStyle}`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww')`,
          }}
        >
          <div className={contetnStyle}>
            <span>Up to</span>
            <span className="text-xl font-bold">50%</span>
            Off
          </div>
          <p className="absolute bottom-4 font-bold text-xl ">
            Explore Our Monthly Offers
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Offer;
