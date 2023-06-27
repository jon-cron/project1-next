import Link from "next/link";

const EventItem = (props) => {
  const { title, date, image, location, id } = props;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  //   NOTE '\n' is a way of adding a line break
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li>
      <img src={"/" + image} alt="" />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{formattedDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};
export default EventItem;
