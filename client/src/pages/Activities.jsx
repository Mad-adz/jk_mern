import { useState } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { activitiesImages } from "@/constants/data";

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
        <div className="container">
          {/* Tab Buttons */}
          <div className="relative right-0 mb-5 max-w-md mx-auto">
            <ul
              className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100"
              role="list"
            >
              {["all", "ashram", "pooja", "yoga"].map((tab) => (
                <li key={tab} className="z-30 flex-auto text-center">
                  <button
                    className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${
                      activeTab === tab
                        ? "text-blue-700 font-bold"
                        : "text-slate-700"
                    }`}
                    // onClick={() => setActiveTab(tab)}
                    onClick={() =>handleTabClick(tab)}
                  >
                    <span className="ml-1 capitalize">
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Grid */}
          {/* <div>
            <div id={activeTab} role="tabpanel">
              <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max">
                {(activeTab === "all"
                  ? allImages
                  : activitiesImages[activeTab]
                ).map((image, index) => (
                  <div key={`${image.id}-${index}`}>
                    <img
                      className="w-full h-60 max-w-full rounded-lg object-cover"
                      src={image.src}
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div> */}
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
                    <img ref={ref} onClick={open} src={img.src} />
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
