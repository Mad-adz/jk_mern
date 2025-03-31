import { useState } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { activitiesImages } from "@/constants/data";
import { Helmet } from "react-helmet-async";

const Activities = () => {
  const [activeTab, setActiveTab] = useState("all");
  const allImages = Object.values(activitiesImages).flat();
  const currentImages =
    activeTab === "all" ? allImages : activitiesImages[activeTab];
  console.log(currentImages);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <div className="mt-[6rem] py-8">
        {/* SEO Meta Tags */}
        <Helmet>
          <title>Spiritual & Wellness Activities | Jai Kosha Foundation</title>
          <meta
            name="description"
            content="Explore spiritual and wellness activities at Jai Kosha Foundation, including ashram experiences, pooja ceremonies, and yoga sessions."
          />
          <meta
            name="keywords"
            content="Spiritual Activities, Ashram Life, Pooja, Yoga, Meditation, Jai Kosha Foundation, Spiritual Retreat, Wellness Practices"
          />
          <meta name="author" content="Jai Kosha Foundation" />

          {/* Open Graph (Facebook) Meta Tags */}
          <meta
            property="og:title"
            content="Spiritual & Wellness Activities - Jai Kosha Foundation"
          />
          <meta
            property="og:description"
            content="Discover a variety of spiritual activities at Jai Kosha Foundation, including meditation, pooja, and wellness retreats."
          />
          <meta
            property="og:image"
            content="https://sreeagamashram.com/wp-content/uploads/2022/04/IMG_8279photo-full-scaled.jpg"
          />
          <meta property="og:url" content="https://jaikosha.com/activities" />
          <meta property="og:type" content="website" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Spiritual & Wellness Activities - Jai Kosha Foundation"
          />
          <meta
            name="twitter:description"
            content="Explore spiritual and wellness activities including yoga, pooja, and ashram experiences at Jai Kosha Foundation."
          />
          <meta
            name="twitter:image"
            content="https://sreeagamashram.com/wp-content/uploads/2022/04/IMG_8279photo-full-scaled.jpg"
          />

          {/* Canonical URL */}
          <link rel="canonical" href="https://jaikosha.com/activities" />
        </Helmet>
        <div className="container">
          {/* Tab Buttons */}
          <div className="relative right-0 mb-5 max-w-md mx-auto">
            <ul
              className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100"
              role="list"
            >
              {["all", "pooja", "culturals", "temple"].map((tab) => (
                <li key={tab} className="z-30 flex-auto text-center">
                  <button
                    className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${
                      activeTab === tab
                        ? "text-emerald-500 font-semibold"
                        : "text-slate-700"
                    }`}
                    // onClick={() => setActiveTab(tab)}
                    onClick={() => handleTabClick(tab)}
                  >
                    <span className="ml-1 capitalize">
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <Gallery>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentImages.map((img) => (
                <Item
                  original={img.src}
                  thumbnail={img.src}
                  width={img.width}
                  height={img.height}
                  key={img.id}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src={img.src}
                      loading="lazy"
                    />
                  )}
                </Item>
              ))}
            </div>
          </Gallery>
        </div>
      </div>
      ;
    </div>
  );
};

export default Activities;
