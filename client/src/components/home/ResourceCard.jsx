import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ResourceCard = ({ title, description, url, image }) => {
  return (
    <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <img src={image} alt="" loading="lazy"/>
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-emerald-500 antialiased">
          {title}
        </h5>
        <p className="block font-sans text-base leading-relaxed text-inherit antialiased">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0">
        <Link
          to={url}
          data-ripple-light="true"
          type="button"
          className="px-6 py-3 rounded-full bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 hover:opacity-90 transition-opacity text-white"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;