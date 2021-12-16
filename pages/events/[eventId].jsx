import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

const EventPage = () => {
	const router = useRouter();
	const event = getEventById(router.query.eventId);
	return (<div>
		{event ?
			<h1>Event page</h1> :
			<p> No  event found </p>
		}
	</div>)
}

export default EventPage;