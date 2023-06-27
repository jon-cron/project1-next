import { getFeaturedEvents } from "@/data/dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};
export default HomePage;
