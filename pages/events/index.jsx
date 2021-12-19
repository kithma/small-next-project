import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

const EventsPage = () => {
	const router = useRouter();
	const events = getAllEvents();
	

	const findEvents = (year, month) => {
		router.push(`/events/${year}/${month}`);
	}
	
	return (
		<div>
			<EventsSearch onSearch={findEvents}/>
			<EventList events={events}/>
		</div>
	)
}

export default EventsPage;