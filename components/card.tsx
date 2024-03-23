const Card = () => {
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-medal text-center"
    >
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  );
  const cardData = [
    {
      icon: svg,
      title: 'Save up to 15% Off Base Rate',
      desc: 'Rent by January 31 ans save up to 15% off base rate(time and manage). Terms Apply',
    },
    {
      icon: svg,
      title: 'Your kind of Travel Planning',
      desc: ' Sign up recieve our latest benifits, updates and great rates delivered to your inbox',
    },
    {
      icon: svg,
      title: 'Plus Your Points',
      desc: 'Join Enterprice Plus @ and be automatic register for our bigesst member promotion of the year.',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4  ">
      {cardData.map(card => (
        <div
          key={card.title}
          className="px-4 py-8  flex  flex-col items-center border gap-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded w-full"
        >
          {card.icon}
          <h3 className="text-lg font-bold">{card.title}</h3>
          <p className="text-sm">{card.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
