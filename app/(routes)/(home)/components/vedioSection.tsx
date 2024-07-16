const VedioSection = () => {
  return (
    <section className="relative h-96 p-24 flex items-center justify-center">
      <div className="h-full object-cover bg-center flex items-center justify-center">
        <video autoPlay muted loop className="w-full video">
          <source src="/car.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Your Text Here</h1>
        <p className="text-lg">Your additional text here</p>
      </div>
    </section>
  );
};

export default VedioSection;
