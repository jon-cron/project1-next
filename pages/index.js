import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/data/dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  return (
    <div>
      <h1>Home page</h1>
      <EventList items={featuredEvents} />
    </div>
  );
};
export default HomePage;
