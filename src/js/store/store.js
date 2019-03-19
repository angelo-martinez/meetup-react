const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			eventlist: [
				{
					eventDate: "April 28",
					eventTime: "9:00 am",
					eventInfo: "4th event for meetup 1",
					eventMeetup: "Meetup 1",
					meetupUrl: "/meetup1",
					eventUrl: "/event4"
				},
				{
					eventDate: "April 29",
					eventTime: "9:00 am",
					eventInfo: "1st event for meetup 2",
					eventMeetup: "Meetup 2",
					meetupUrl: "/meetup2",
					eventUrl: "/event1"
				},
				{
					eventDate: "April 30",
					eventTime: "9:00 am",
					eventInfo: "5th event for meetup 1",
					eventMeetup: "Meetup 1",
					meetupUrl: "/meetup1",
					eventUrl: "/event5"
				},
				{
					eventDate: "October 10",
					eventTime: "9:00 am",
					eventInfo: "2nd event for meetup 2",
					eventMeetup: "Meetup 2",
					meetupUrl: "/meetup2",
					eventUrl: "/event4"
				}
			],
			meetups: [],
			events: []
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
