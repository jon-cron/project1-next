import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/data/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";

const EventDetailPage = () => {
  const router = useRouter();
  const event = getEventById(router.query.id);
  if (!event) {
    return <p>no event found.</p>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        location={event.location}
        image={event.image}
        imageAlt={event.id}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};
export default EventDetailPage;
