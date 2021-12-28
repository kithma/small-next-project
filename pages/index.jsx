import { getFeaturedEvents } from "../utils/api-utils";
import EventList from "../components/events/EventList";
import Head from "next/head";

const Home = (props) => {
 return (
   <div>
      <Head><title>Featured Events</title></Head>
      <EventList events={props.events} />
    </div>
  )
}

export const getStaticProps = async () => {

  return {
    props: {
      events: await getFeaturedEvents()
    },
    revalidate: 600
  }
}

export default Home;