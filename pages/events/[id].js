import { getEventById } from "@/data/dummy-data";
import { useRouter } from "next/router";

const EventDetailPage = () => {
  const router = useRouter();
  const event = getEventById(router.query.id);
  if (!event) {
    return <p>no event found</p>;
  }
  return (
    <div>
      <h1>event detail</h1>
    </div>
  );
};
export default EventDetailPage;
