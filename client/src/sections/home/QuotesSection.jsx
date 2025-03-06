import { quotes } from "@/constants";
const QuotesSection = () => {
  return (
    <section className="py-8">
      <div className="container">
        <h3 className="text-3xl font-bold mb-2">Daily Dose of Inspiration</h3>
      </div>
      <div className="relative flex overflow-x-hidden">
        {/* First Marquee */}
        <div className="py-8 animate-marquee whitespace-nowrap flex items-center">
          {quotes.slice(0, quotes.length / 2).map((quote, index) => (
            <span
              key={index}
              className="w-80 text-wrap inline-flex text-xl mx-4 px-4 py-8 border-2 border-yellow-100 rounded-md h-auto min-h-[200px] text-center bg-yellow-50/50"
            >
              {quote}
            </span>
          ))}
        </div>

        {/* Second Marquee */}
        <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap flex items-center">
          {quotes.slice(quotes.length / 2).map((quote, index) => (
            <span
              key={index}
              className="w-80 text-wrap inline-flex text-xl mx-4 px-4 py-8 border-2 border-yellow-100 rounded-md h-auto min-h-[200px] text-center bg-yellow-50/50"
            >
              {quote}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
