import { donationBanner, upiQRCode } from "@/assets/images";
import { PanoramicBanner } from "@/components";

const Donate = () => {
  return (
    <main>
      <PanoramicBanner bgImg={donationBanner} title={"Donations"} />
      <section className="bg-yellow-50/50 py-12 antialiased text-lg font-normal">
        <div className="container">
          <div className="mb-5">
            <h3 className="text-3xl font-bold mb-5">
              Support Our Mission of Healing and Transformation
            </h3>
            <p className="indent-10 leading-relaxed text-inherit text-gray-600 mb-5">
              At Jai Kosha Foundation, we are dedicated to spreading the light
              of spiritual healing and transformation. Your generous
              contributions enable us to continue our mission of providing a
              serene sanctuary where individuals can find inner peace, spiritual
              growth, and holistic well-being.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3">Why Donate?</h4>
            <p className="leading-relaxed text-inherit text-gray-600 mb-3">
              Your support helps us to:
            </p>
            <ul className="list-disc list-inside mb-5">
              <li>
                <span className="font-semibold">
                  Maintain the Ashram&apos;s Tranquility :{" "}
                </span>{" "}
                Preserve the serene environment of the ashram, including
                meditation halls, gardens, and sacred spaces.
              </li>
              <li>
                <span className="font-semibold">
                  Offer Free Healing Services :{" "}
                </span>{" "}
                Provide spiritual guidance, meditation sessions, and healing
                therapies to those in need, especially the underprivileged.
              </li>
              <li>
                <span className="font-semibold">
                  Organize Spiritual Retreats :{" "}
                </span>{" "}
                Conduct regular workshops, satsangs, and retreats that foster
                self-awareness and mindfulness.
              </li>
              <li>
                <span className="font-semibold">
                  Promote Community Welfare :{" "}
                </span>{" "}
                Extend our support to local communities through charitable
                initiatives like free meals, educational programs, and medical
                camps.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3">How You Can Help?</h4>
            <p className="leading-relaxed text-inherit text-gray-600 mb-3">
              Every contribution, big or small, makes a difference. You can:
            </p>
            <ul className="list-disc list-inside mb-5">
              <li>
                <span className="font-semibold">
                  Make a One-Time Donation :{" "}
                </span>{" "}
                Support specific causes like maintenance, workshops, or meals.
              </li>
              <li>
                <span className="font-semibold">
                  Become a Monthly Contributor :{" "}
                </span>{" "}
                Help sustain our efforts with regular contributions.
              </li>
              <li>
                <span className="font-semibold">Sponsor a Program : </span> Fund
                an event, retreat, or healing session to touch the lives of
                many.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3">Ways to Donate</h4>
            <p className="leading-relaxed text-inherit text-gray-600 mb-3">
              You can contribute in the following ways:
            </p>
            <ul className="list-disc list-inside mb-5">
              <li>
                <span className="font-semibold">Online Donations : </span> Use
                our secure payment gateway to donate online.
              </li>
              <li>
                <span className="font-semibold">Bank Transfer : </span> Transfer
                directly to our account. (Account details below.)
              </li>
              <li>
                <span className="font-semibold">In-Person : </span> Visit us at
                the ashram and donate in person.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-bold mb-3">Account Details</h4>
            <p>
              <span className="font-semibold">Name : </span> Jai Kosha
              Foundation
              <br />
              <span className="font-semibold">Bank : </span> IndusInd Bank
              <br />
              <span className="font-semibold">UPI ID : </span>{" "}
              pos.11348526@indus
              <br />
              <span className="font-semibold">QR Code : </span> Scan the QR Code
              below to Donate
            </p>
          </div>
          <div className="max-w-xs overflow-hidden rounded-md shadow-sm">
            <img
              src={upiQRCode}
              alt="Jai Kosha Foundation"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donate;
