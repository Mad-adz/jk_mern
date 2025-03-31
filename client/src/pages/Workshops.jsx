import { workshopBanner } from "@/assets/images";
import { PanoramicBanner } from "@/components";
import { Helmet } from "react-helmet-async";

const Workshops = () => {
  return (
    <main>
      {/* SEO Metadata */}
      <Helmet>
        <title>
          Spiritual Healing Workshop | Unlock Inner Peace | Jai Kosha Foundation
        </title>
        <meta
          name="description"
          content="Join our Spiritual Healing Workshop to experience guided meditation, chakra healing, energy cleansing, and manifestation techniques."
        />
        <meta
          name="keywords"
          content="spiritual healing, meditation, chakra alignment, energy cleansing, manifestation, yoga retreat"
        />
      </Helmet>
      <PanoramicBanner bgImg={workshopBanner} title={"Workshops"} />
      <section className="bg-yellow-50/50 py-12 antialiased text-lg font-normal">
        <div className="container">
          <div className="mb-5">
            <h3 className="text-3xl font-bold mb-5">
              Welcome to Our Spiritual Healing Workshop
            </h3>
            <h5 className="text-xl font-bold mb-5">
              Unlock Inner Peace and Balance Your Life
            </h5>
            <p className="indent-10 leading-relaxed text-inherit text-gray-600 mb-5">
              Are you seeking a path to inner peace, emotional balance, and
              spiritual awakening? Our Spiritual Healing Workshop is designed to
              guide you on a transformative journey, helping you reconnect with
              your true self and harness the energy within.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3">Why Donate?</h4>
            <p className="leading-relaxed text-inherit text-gray-600 mb-3">
              What You Will Experience
            </p>
            <ol className="list-disc list-inside mb-5">
              <li>
                <span className="font-semibold">Guided Meditation : </span>{" "}
                Immerse yourself in soothing meditative practices that calm the
                mind, enhance clarity, and promote deep relaxation.
              </li>
              <li>
                <span className="font-semibold">Chakra Healing : </span> Learn
                to balance and align your chakras, unlocking the flow of
                positive energy for emotional and physical well-being.
              </li>
              <li>
                <span className="font-semibold">Energy Cleansing : </span>{" "}
                Release negative energies and welcome a renewed sense of
                vitality through proven spiritual techniques.
              </li>
              <li>
                <span className="font-semibold">
                  Manifestation Techniques :{" "}
                </span>{" "}
                Discover how to channel your intentions and manifest abundance,
                love, and success in your life.
              </li>
              <li>
                <span className="font-semibold">Sound Healing : </span>{" "}
                Experience the healing power of sound vibrations through singing
                bowls, chimes, and other instruments that rejuvenate your soul.
              </li>
            </ol>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3">Who Can Attend?</h4>
            <p className="leading-relaxed text-inherit text-gray-600 mb-3">
              This workshop is perfect for:
            </p>
            <ul className="list-disc list-inside mb-5">
              <li>Anyone feeling stressed, anxious, or overwhelmed.</li>
              <li>
                Those seeking deeper spiritual understanding and personal
                growth.
              </li>
              <li>
                Individuals looking to connect with like-minded souls on a
                healing journey.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3">What to Bring?</h4>

            <ul className="list-disc list-inside mb-5">
              <li>A yoga mat or comfortable seating.</li>
              <li>A journal for reflections and notes.</li>
              <li>An open mind and willingness to embrace positive change.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Spiritual Healing Workshop",
          startDate: "2024-07-10T10:00",
          endDate: "2024-07-10T16:00",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "Sree Agam Ashram",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Spiritual Path",
              addressLocality: "Chennai",
              postalCode: "600001",
              addressCountry: "IN",
            },
          },
          image: workshopBanner,
          description:
            "Join our Spiritual Healing Workshop for guided meditation, chakra healing, and manifestation techniques.",
          offers: {
            "@type": "Offer",
            url: "https://sreeagamashram.com/workshops",
            price: "0",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            validFrom: "2024-06-01T00:00",
          },
          performer: {
            "@type": "Person",
            name: "Spiritual Guru",
          },
          organizer: {
            "@type": "Organization",
            name: "Sree Agam Ashram",
            url: "https://sreeagamashram.com",
          },
        })}
      </script>
    </main>
  );
};

export default Workshops;
