import { UpcomingEventCard } from "@/components";
import { events } from "@/constants";

const UpcomingEventsSection = () => {
  return (
    <section className="py-8 bg-yellow-50/50">
      <div className="container">
        <h3 className="text-3xl font-bold mb-10">Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {events.map((event, index) => (
            <div key={index} className="mb-4">
              <UpcomingEventCard
                id={event.id}
                title={event.title}
                datetime={event.datetime}
                location={event.location}
                url={event.url}
                fees={event.fees}
                banner={event.banner}
                description={event.description}
                organizer={event.organizer}
                tags={event.tags}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
