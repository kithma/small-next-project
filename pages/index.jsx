import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

const Home = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div >
      {/* <h1>The home page</h1> */}
      <EventList events={featuredEvents} />
    </div>
  )
}

export default Home;