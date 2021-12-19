import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/shared/Button";

const FilteredEventPage = () => {
	const router = useRouter();

	const filterData = router.query.slug;

	if (!filterData) {
		return <p>No filter found!</p>
	}

	const filteredYear = +filterData[0];
	const filteredMonth = +filterData[1];


	if (isNaN(filteredYear) || isNaN(filteredMonth) || filteredMonth < 1 || filteredMonth > 12) {
		return <p>Invaid filter</p>
	}

	const filteredEvents = getFilteredEvents({
		year: filteredYear,
		month: filteredMonth
	});

	if (!filteredEvents || filteredEvents.length === 0) {
		return <>
			<p>No events found for the selected filter</p>
			<Button link="/events"> Show All events</Button>
			</>
	}

	const date = new Date(filteredYear,filteredMonth-1);

	return <div>
		<ResultsTitle date={date}/>
		<EventList events={filteredEvents}/>
	</div>
}

export default FilteredEventPage;