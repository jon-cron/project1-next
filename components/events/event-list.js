import EventItem from "../event-item";

const EventList = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <EventItem
          id={item.id}
          title={item.title}
          location={item.location}
          key={item.id}
          date={item.date}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
