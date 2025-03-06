import { workshopBanner } from "@/assets/images";
import { PanoramicBanner } from "@/components";

const Workshops = () => {
  return (
    <main>
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
    </main>
  );
};

export default Workshops;
