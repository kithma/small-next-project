import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../utils/api-utils";
import { useRouter } from "next/router";
import Head from "next/head";

const EventsPage = ({events}) => {
	const router = useRouter();
	
	const findEvents = (year, month) => {
		router.push(`/events/${year}/${month}`);
	}
	
	return (
		<div>
			<Head><title>All Events</title></Head>
			<EventsSearch onSearch={findEvents}/>
			<EventList events={events}/>
		</div>
	)
}

export default EventsPage;

export const getStaticProps = async () => {
	const events = await getAllEvents();

	return {
		props: {
			events
		},
		revalidate: 60
	}
}