import { useRouter } from "next/router";
import { getFilteredEvents } from "../../utils/api-utils";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/shared/Button";
import Head from "next/head";

const FilteredEventPage = ({ hasError, filteredEvents, year, month }) => {
	
	if (hasError) {
		return <p>Invalid filter</p>
	}

		if (!filteredEvents || filteredEvents.length === 0) {
		return <>
			<p>No events found for the selected filter</p>
			<Button link="/events"> Show All events</Button>
			</>
	}

	const date = new Date(year,month-1);

	return <div>
		<Head><title>Filterd Event</title></Head>
		<ResultsTitle date={date}/>
		<EventList events={filteredEvents}/>
	</div>
}

export default FilteredEventPage;

export const getServerSideProps = async ({ params }) => {
	const filterData = params.slug;

	const filteredYear = +filterData[0];
	const filteredMonth = +filterData[1];

	if (isNaN(filteredYear) || isNaN(filteredMonth) || filteredMonth < 1 || filteredMonth > 12) {
		return {
			hasError: true
		}
	}

	const filteredEvents = await getFilteredEvents({
		year: filteredYear,
		month: filteredMonth
	});

	console.log(filteredEvents,"filteredEvents")
	
	return {
		props: {
			filteredEvents,
			year: filteredYear,
			month: filteredMonth
		}
	}
}