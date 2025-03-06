import { Link } from "react-router-dom";
import { truncateText } from "@/utils/helpers";

const UpcomingEventCard = ({
  id,
  title,
  datetime,
  location,
  description,
  url,
  banner,
  fees,
  organizer,
  tags,
}) => {
  return (
    <div className="group relative flex min-h-[240px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[360px]">
      <Link
        to={`/events/${id}`}
        style={{ backgroundImage: `url(${banner})` }}
        className="flex justify-center items-center flex-grow bg-gray-50 bg-cover bg-center text-gray-500 min-h-[160px]"
      />
      <div className="flex min-h-[200px] flex-col gap-3 p-5 md:gap-4">
        <Link to={""}>
          <p className="line-clamp-2 flex-1 text-red-600 text-xl font-bold">
            {title}
          </p>
        </Link>
        <div className="flex gap-2">
          <p className="w-min rounded-full bg-green-100 px-4 py-1 text-emerald-500 text-sm">
            {fees}
          </p>
          <p className="flex gap-2">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="w-min rounded-full bg-gray-100 px-4 py-1 text-gray-500 text-sm"
              >
                {tag}
              </span>
            ))}
          </p>
        </div>

        <p className="text-gray-500">
          {datetime} | {location}
        </p>

        <p>{truncateText(description)}</p>

        <div className="flex justify-between items-center w-full">
          <p className=" text-gray-600">by {organizer}</p>

          <Link to={url} className="flex gap-2">
            <span className="text-gray-500">Explore</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
