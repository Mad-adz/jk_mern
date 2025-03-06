import { eventBanner2 } from "@/assets/images";
import { UpcomingEventsSection } from "@/sections";

const Events = () => {
  return (
    <main className="mt-[6rem]">
      <section
        className="grid h-screen w-full bg-cover bg-center bg-no-repeat]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${eventBanner2})`,
        }}
      >
        <div className="container mx-auto flex flex-col justify-center h-full px-8 text-center">
          <div className="my-auto text-center">
            <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white lg:!text-4xl !text-3xl">
              Get Ready for a Divine Experience!
            </h2>
            <p className="block antialiased font-sans text-lg leading-relaxed text-inherit mb-5 mt-4 mx-auto text-white w-full lg:max-w-3xl">
              We are thrilled to announce an upcoming spiritual event that
              promises to uplift, heal, and inspire your soul. Prepare to embark
              on a sacred journey filled with divine wisdom and spiritual
              awakening.
            </p>
            <p className="block antialiased font-sans text-lg leading-relaxed text-inherit mb-5 mt-4 mx-auto text-white w-full lg:max-w-3xl">
              Stay connected as we finalize the details of this life-changing
              experience.
            </p>
            <p className="block antialiased font-sans text-lg leading-relaxed text-inherit font-medium text-white mb-10">
              Sign up now to be the first to receive updates
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center max-w-md mx-auto">
              <div className="relative w-full min-w-[200px] h-10">
                <input
                  // {...register("email")}
                  placeholder="name@email.com"
                  name="email"
                  className="block w-full px-5 py-2 text-zinc-700 placeholder-zinc-400 bg-white border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-emerald-500 w-full md:max-w-fit"
                type="button"
                data-ripple-light="true"
              >
                notify me
              </button>
            </div>
          </div>
        </div>
      </section>
      <UpcomingEventsSection />
    </main>
  );
};

export default Events;
